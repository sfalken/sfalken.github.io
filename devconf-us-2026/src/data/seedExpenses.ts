export interface Expense {
  id: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  date: string;
  savedAt: string;
  budgetItemId?: string;
}

// flight-rt-confirmed was $512.31 (fare + upgrade combined); split into two entries.
export const retiredExpenseIds: string[] = ['flight-rt-confirmed'];

export const seedExpenses: Expense[] = [
  {
    id: 'flight-rt-fare',
    amount: 391.31,
    currency: 'USD',
    category: 'flights',
    description: 'Round-trip flight (confirmed)',
    date: '2026-07-07',
    savedAt: '2026-07-07T00:00:00.000Z',
    budgetItemId: 'flight-rt',
  },
  {
    id: 'flight-return-upgrade',
    amount: 121,
    currency: 'USD',
    category: 'flights',
    description: 'Premium economy upgrade (flight home)',
    date: '2026-07-07',
    savedAt: '2026-07-07T00:00:00.000Z',
    budgetItemId: 'flight-rt',
  },
  {
    id: 'hotel-nights-confirmed',
    amount: 2184.93,
    currency: 'USD',
    category: 'accommodation',
    description: 'Hotel (confirmed)',
    date: '2026-07-07',
    savedAt: '2026-07-07T00:00:00.000Z',
    budgetItemId: 'hotel-nights',
  },
  {
    id: 'travel-insurance-confirmed',
    amount: 103,
    currency: 'USD',
    category: 'misc',
    description: 'Travel insurance',
    date: '2026-07-07',
    savedAt: '2026-07-07T00:00:00.000Z',
    budgetItemId: 'travel-insurance',
  },
];
