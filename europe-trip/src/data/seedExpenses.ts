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
  budgetItemId?: string;
  _pii?: string;
}

export const retiredExpenseIds: string[] = [
  '1782207421607', // replaced by food-prague-jun22 + special-dinner-jun22 split
];

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
    budgetItemId: 'flight-outbound',
    _pii: seedBlobs['seed-klm-rt-flight'] || undefined,
  },
  {
    id: '1782207101122',
    amount: 23230.26,
    currency: 'CZK',
    category: 'accommodation',
    description: 'Hotel 11th through 17th',
    city: 'Prague',
    date: '2026-06-17',
    savedAt: '2026-06-23T09:31:41.122Z',
    budgetItemId: 'hotel-andels',
  },
  {
    id: '1782207152673',
    amount: 726,
    currency: 'CZK',
    category: 'food',
    description: 'Conference Meals/Drinks',
    city: 'Prague',
    date: '2026-06-17',
    savedAt: '2026-06-23T09:32:32.673Z',
  },
  {
    id: 'food-prague-jun22',
    amount: 5864,
    currency: 'CZK',
    category: 'food',
    description: 'Prague food',
    city: 'Prague',
    date: '2026-06-22',
    savedAt: '2026-06-23T09:37:01.607Z',
    budgetItemId: 'food-prague',
  },
  {
    id: 'special-dinner-jun22',
    amount: 4010,
    currency: 'CZK',
    category: 'food',
    description: 'Special dinner',
    city: 'Prague',
    date: '2026-06-22',
    savedAt: '2026-06-23T09:37:01.607Z',
    budgetItemId: 'special-dinners',
  },
  {
    id: '1782207668063',
    amount: 23493.70,
    currency: 'CZK',
    category: 'accommodation',
    description: 'Hotel 17th through 22nd',
    city: 'Prague',
    date: '2026-06-22',
    savedAt: '2026-06-23T09:41:08.063Z',
    budgetItemId: 'hotel-hilton-prague',
  },
  {
    id: '1782207709523',
    amount: 4010,
    currency: 'CZK',
    category: 'misc',
    description: 'Laundry',
    city: 'Prague',
    date: '2026-06-22',
    savedAt: '2026-06-23T09:41:49.523Z',
  },
  {
    id: '1782208040408',
    amount: 27.46,
    currency: 'USD',
    category: 'food',
    description: 'Conference Food/Drinks',
    city: 'Prague',
    date: '2026-06-15',
    savedAt: '2026-06-23T09:47:20.408Z',
  },
  {
    id: 'connectivity-eu-sim',
    amount: 40,
    currency: 'USD',
    category: 'connectivity',
    description: 'EU SIM / roaming',
    city: 'Prague',
    date: '2026-06-11',
    savedAt: '2026-06-23T00:00:00.000Z',
    budgetItemId: 'sim-card',
  },
  {
    id: '1782208092674',
    amount: 59.55,
    currency: 'USD',
    category: 'transport',
    description: 'FlixBus - 2 Ppl, Prague to Nürnberg',
    city: 'Prague',
    date: '2026-06-20',
    savedAt: '2026-06-23T09:48:12.674Z',
    budgetItemId: 'bus-prague-nuremberg',
  },
];
