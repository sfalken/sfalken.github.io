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

export const seedExpenses: Expense[] = [];
