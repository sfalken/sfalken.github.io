import seedBlobsRaw from './seed-expenses-pii-blobs.json';
const seedBlobs = seedBlobsRaw as Record<string, string>;
void seedBlobs;

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

// Potential trip — nothing booked or spent yet.
export const retiredExpenseIds: string[] = [];

export const seedExpenses: Expense[] = [];
