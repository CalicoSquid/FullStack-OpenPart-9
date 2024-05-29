import { parseBmiArguments as parseArgs } from './utils/parseArguments';

const bmiCalc = (height: number, weight: number): string => {
    const heightInMeters = height / 100;
    const bmi = parseInt((weight / (heightInMeters * heightInMeters)).toFixed(2));

    if (bmi < 18.5) {
        return `Your BMI is ${bmi} and you are underweight.`;
    } else if (bmi >= 18.5 && bmi < 25) {
        return `Your BMI is ${bmi} and you have a normal weight.`;
    } else if (bmi >= 25 && bmi < 30) {
        return `Your BMI is ${bmi} and you are slightly overweight.`;
    } else if (bmi >= 30 && bmi < 35) {
        return `Your BMI is ${bmi} and you are obese.`;
    } else {
        return `Your BMI is ${bmi} and you are clinically obese.`;
    };
}

try {
    const result = bmiCalc(parseArgs(process.argv).height, parseArgs(process.argv).weight);
    console.log(result);
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
}
