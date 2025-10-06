import { TestCaseBase } from 'types/common';

export type Transaction = {
  userId: number;
  amount: number;
  type: 'income' | 'expense';
};

export type Summary = {
  userId: number;
  totalIncome: number;
  totalExpense: number;
  net: number;
};

export type SummarizeTransactionsFn = (
  transactions: Transaction[],
) => Summary[];

export interface SummarizeTransactionsTestCase
  extends TestCaseBase<Transaction[], Summary[]> {}
