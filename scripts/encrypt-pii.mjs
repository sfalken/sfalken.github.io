#!/usr/bin/env node
/**
 * Encrypts PII source files into per-city blob JSON files.
 *
 * Usage:
 *   node scripts/encrypt-pii.mjs --password "your-passphrase"
 *   TRIPS_PII_KEY="your-passphrase" node scripts/encrypt-pii.mjs
 *   node scripts/encrypt-pii.mjs          # prompts interactively
 *
 * Reads:  scripts/pii-sources/{city}.json   (gitignored — keep local)
 * Writes: {trip}/src/data/{city}-pii-blobs.json   (committed — safe, encrypted)
 *
 * Blob format: base64( iv[12] || ciphertext[n] || tag[16] )
 * Key derivation: PBKDF2-SHA256, 250 000 iterations, fixed salt
 */

import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline';

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = resolve(__dir, '..');

const SALT       = Buffer.from('sfalken-trips-pii-v1');
const ITERATIONS = 250_000;

// Which source file lives in which trip sub-project
const CITY_TRIP = {
  prague:               'europe-trip',
  nuremberg:            'europe-trip',
  boston:               'usa-trip',
  austin:               'texas-trip',
  vancouver:            'canada-trip',
  'europe-budget':      'europe-trip',
  'europe-seed-expenses': 'europe-trip',
};

// Override output filename (default: {source}-pii-blobs.json)
const CUSTOM_OUTPUT = {
  'europe-budget':        'budget-pii-blobs.json',
  'europe-seed-expenses': 'seed-expenses-pii-blobs.json',
};

function deriveKey(password) {
  return pbkdf2Sync(password, SALT, ITERATIONS, 32, 'sha256');
}

function encryptPii(obj, key) {
  const iv        = randomBytes(12);
  const cipher    = createCipheriv('aes-256-gcm', key, iv);
  const plaintext = JSON.stringify(obj);
  const ct        = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag       = cipher.getAuthTag();          // 16 bytes
  return Buffer.concat([iv, ct, tag]).toString('base64');
}

async function promptPassword() {
  const rl = createInterface({ input: process.stdin, output: process.stderr });
  process.stderr.write('Passphrase: ');
  return new Promise(res => rl.question('', pw => { rl.close(); res(pw); }));
}

// --- main ---

const args = process.argv.slice(2);
const pwIdx = args.indexOf('--password');
let password =
  (pwIdx !== -1 && args[pwIdx + 1]) ? args[pwIdx + 1]
  : process.env.TRIPS_PII_KEY        ? process.env.TRIPS_PII_KEY
  : await promptPassword();

if (!password) { console.error('No passphrase supplied.'); process.exit(1); }

const key         = deriveKey(password);
const sourcesDir  = resolve(__dir, 'pii-sources');
const sourceFiles = readdirSync(sourcesDir).filter(f => f.endsWith('.json'));

if (sourceFiles.length === 0) {
  console.error(`No source files found in ${sourcesDir}`);
  process.exit(1);
}

let total = 0;
for (const file of sourceFiles) {
  const city  = file.replace('.json', '');
  const trip  = CITY_TRIP[city];
  if (!trip) { console.warn(`Unknown city "${city}" — skipping.`); continue; }

  const sources  = JSON.parse(readFileSync(resolve(sourcesDir, file), 'utf8'));
  const blobMap  = {};
  for (const { id, ...pii } of sources) {
    blobMap[id] = encryptPii(pii, key);
    total++;
  }

  const outFile = CUSTOM_OUTPUT[city] ?? `${city}-pii-blobs.json`;
  const outPath = resolve(root, trip, 'src', 'data', outFile);
  writeFileSync(outPath, JSON.stringify(blobMap, null, 2) + '\n');
  console.log(`✓ ${city}: ${Object.keys(blobMap).length} entries → ${trip}/src/data/${outFile}`);
}

console.log(`\n${total} entries encrypted. Commit the updated *-pii-blobs.json files.`);
