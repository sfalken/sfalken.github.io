const CACHE = 'texas-trip-v1';
const BASE = '/texas-trip';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      `${BASE}/`,
      `${BASE}/austin/`,
      `${BASE}/checklist/`,
      `${BASE}/budget/`,
      `${BASE}/log/`,
      `${BASE}/about/`,
    ])).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for HTML pages to avoid stale CSS scoping issues
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for assets
  e.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
