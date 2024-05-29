import { BmiValues, ExerciseValues } from "./interfaces";

export const parseBmiArguments = (
  height: number,
  weight: number
): BmiValues => {
  if (!isNaN(height) && !isNaN(weight)) {
    return {
      height,
      weight,
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export const parseExerciseArguments = (
  data: number[],
  target: number
): ExerciseValues => {

  if(data.length < 1 || !data || !target) {
    throw new Error("Parameters Missing");
  }

  if (isNaN(Number(target)))
    throw new Error("Malformatted parameters");

  data.forEach((element) => {
    const elementNum: number = Number(element);
    if (isNaN(elementNum) || elementNum < 0) {
      throw new Error("Malformatted parameters");
    }
  });

  return { data, target };
};
