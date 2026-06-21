import seedBlobsRaw from './seed-expenses-pii-blobs.json';
const seedBlobs = seedBlobsRaw as Record<string, string>;

export interface Expense {
  id: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  city: string;
  date: string;
  savedAt: string;
  _pii?: string;
}

export const seedExpenses: Expense[] = [
  {
    id: 'seed-klm-rt-flight',
    amount: 5191.33,
    currency: 'USD',
    category: 'flights',
    description: 'Confirmed flight (unlock for details)',
    city: 'Transit',
    date: '2026-06-10',
    savedAt: '2026-06-10T00:00:00.000Z',
    _pii: seedBlobs['seed-klm-rt-flight'] || undefined,
  },
  {
    id: 'seed-hotel-andels',
    amount: 1152.46,
    currency: 'USD',
    category: 'accommodation',
    description: 'Confirmed accommodation (unlock for details)',
    city: 'Prague',
    date: '2026-06-11',
    savedAt: '2026-06-11T00:00:00.000Z',
    _pii: seedBlobs['seed-hotel-andels'] || undefined,
  },
];
