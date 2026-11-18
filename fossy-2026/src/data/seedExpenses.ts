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
    id: 'hotel-aug6-9-confirmed',
    amount: 871.23,
    currency: 'CAD',
    category: 'accommodation',
    description: 'Hotel confirmed (Aug 6–9, 3 nights)',
    date: '2026-08-09',
    savedAt: '2026-06-23T00:00:00.000Z',
    budgetItemId: 'hotel-nights',
  },
];
