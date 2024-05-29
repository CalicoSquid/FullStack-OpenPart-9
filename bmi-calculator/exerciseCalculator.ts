import { parseExerciseArguments as parseArguments } from "./utils/parseArguments";
import { exerciseValues } from "./utils/interfaces";


const exerciseCalculator = (
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

try {
  const parsedArgs = parseArguments(process.argv);
  const data = parsedArgs.data;
  const target = parsedArgs.target;
  console.log(exerciseCalculator(data, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
