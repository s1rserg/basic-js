export type Rating = {
  userId: number;
  movieId: number;
  score: number; // from 1 to 10
};

export type MovieAverage = {
  movieId: number;
  averageScore: number;
};

export type CalculateAverageRatingsFn = (ratings: Rating[]) => MovieAverage[];

export interface TestCaseBase<Input, Expected> {
  input: Input;
  expected: Expected;
}

export type CalculateAverageRatingsTestCase = TestCaseBase<
  Rating[],
  MovieAverage[]
>;
