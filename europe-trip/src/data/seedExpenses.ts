export interface Expense {
  id: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  city: string;
  date: string;
  savedAt: string;
}

export const seedExpenses: Expense[] = [
  {
    id: 'seed-klm-rt-flight',
    amount: 5191.33,
    currency: 'USD',
    category: 'flights',
    description: 'KLM Premium Select — SEA→AMS→PRG / NUE→AMS→SEA (round trip)',
    city: 'Transit',
    date: '2026-06-10',
    savedAt: '2026-06-10T00:00:00.000Z',
  },
  {
    id: 'seed-hotel-andels',
    amount: 1152.46,
    currency: 'USD',
    category: 'accommodation',
    description: 'Orea Hotel Andel\'s Praha — Jun 11–17 (6 nights)',
    city: 'Prague',
    date: '2026-06-11',
    savedAt: '2026-06-11T00:00:00.000Z',
  },
];
