import { BmiValues, ExerciseValues } from "./interfaces";

export const parseBmiArguments = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3]),
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

export const parseExerciseArguments = (args: string[]): ExerciseValues => {
    if (args.length < 4) throw new Error("Not enough arguments");
  
    let numArray = [];
    args = args.slice(2);
  
    args.forEach((arg) => {
      const num = Number(arg);
      if (isNaN(num)) throw new Error("Provided values were not numbers!");
      if (num < 0) throw new Error("Provided values were not positive numbers!");
      numArray.push(num);
    });
  
    return {
      data: numArray.slice(1),
      target: Number(args[0])
    };
  };