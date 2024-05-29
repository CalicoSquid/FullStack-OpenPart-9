import { exerciseValues } from "./utils/interfaces";


export const exerciseCalculator = (
  data: number[],
  target: number
): exerciseValues => {
  const periodLength = data.length;
  const trainingDays = data.filter((hour) => hour > 0).length;
  const average = data.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;
  const rating = success ? 3 : average >= target / 2 ? 2 : 1;
  const ratingDescription =
    rating === 3
      ? "good"
      : rating === 2
      ? "not too bad but could be better"
      : "bad";

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

