import { CalculateAverageRatingsTestCase } from './types';

export const calculateAverageRatingsTestCases: CalculateAverageRatingsTestCase[] =
  [
    {
      input: [
        { userId: 1, movieId: 10, score: 8 },
        { userId: 2, movieId: 10, score: 6 },
        { userId: 3, movieId: 11, score: 7 },
      ],
      expected: [
        { movieId: 10, averageScore: 7 },
        { movieId: 11, averageScore: 7 },
      ],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [
        { userId: 1, movieId: 5, score: 10 },
        { userId: 2, movieId: 5, score: 9 },
        { userId: 3, movieId: 5, score: 10 },
        { userId: 1, movieId: 6, score: 6 },
      ],
      expected: [
        { movieId: 5, averageScore: 9.7 },
        { movieId: 6, averageScore: 6 },
      ],
    },
    {
      input: [
        { userId: 1, movieId: 7, score: 5 },
        { userId: 2, movieId: 7, score: 5 },
        { userId: 3, movieId: 7, score: 5 },
      ],
      expected: [{ movieId: 7, averageScore: 5 }],
    },
  ];
