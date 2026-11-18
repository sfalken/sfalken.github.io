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

export const retiredExpenseIds: string[] = [];

export const seedExpenses: Expense[] = [
  {
    id: 'flight-rt-confirmed',
    amount: 873.79,
    currency: 'USD',
    category: 'flights',
    description: 'Round-trip flight SEA ↔ AUS (confirmed)',
    date: '2026-07-18',
    savedAt: '2026-07-18T00:00:00.000Z',
    budgetItemId: 'flight-rt',
  },
];
