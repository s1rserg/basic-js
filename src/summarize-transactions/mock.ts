import { SummarizeTransactionsTestCase } from 'summarize-transactions/types';

export const summarizeTransactionsTestCases: SummarizeTransactionsTestCase[] = [
  {
    input: [
      { userId: 1, amount: 100, type: 'income' },
      { userId: 1, amount: 50, type: 'expense' },
      { userId: 2, amount: 200, type: 'income' },
      { userId: 1, amount: 25, type: 'expense' },
    ],
    expected: [
      { userId: 1, totalIncome: 100, totalExpense: 75, net: 25 },
      { userId: 2, totalIncome: 200, totalExpense: 0, net: 200 },
    ],
  },
  {
    input: [],
    expected: [],
  },
  {
    input: [
      { userId: 1, amount: 500, type: 'income' },
      { userId: 1, amount: 100, type: 'expense' },
      { userId: 2, amount: 200, type: 'expense' },
    ],
    expected: [
      { userId: 1, totalIncome: 500, totalExpense: 100, net: 400 },
      { userId: 2, totalIncome: 0, totalExpense: 200, net: -200 },
    ],
  },
  {
    input: [
      { userId: 3, amount: 300, type: 'income' },
      { userId: 3, amount: 200, type: 'income' },
    ],
    expected: [{ userId: 3, totalIncome: 500, totalExpense: 0, net: 500 }],
  },
  {
    input: [
      { userId: 4, amount: 50, type: 'expense' },
      { userId: 4, amount: 150, type: 'expense' },
    ],
    expected: [{ userId: 4, totalIncome: 0, totalExpense: 200, net: -200 }],
  },
  {
    input: [
      { userId: 2, amount: 100, type: 'expense' },
      { userId: 1, amount: 300, type: 'income' },
      { userId: 2, amount: 400, type: 'income' },
      { userId: 1, amount: 50, type: 'expense' },
    ],
    expected: [
      { userId: 1, totalIncome: 300, totalExpense: 50, net: 250 },
      { userId: 2, totalIncome: 400, totalExpense: 100, net: 300 },
    ],
  },
];
