import express from 'express';
const app = express();
app.use(express.json());

import { bmiCalc } from './bmiCalculator';
import {exerciseCalculator } from './exerciseCalculator';
import { parseBmiArguments, parseExerciseArguments } from './utils/parseArguments';


app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!");
})

app.get("/bmi", (req, res) => {
    const height = req.query.height as string;
    const weight = req.query.weight as string;

    try {
        const args = parseBmiArguments(Number(height), Number(weight));
        const result = bmiCalc(args);
        res.send({
            height: height,
            weight: weight,
            bmi: result
        }).status(200)
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
            res.send(errorMessage).status(400)
        }
    }
})

app.post("/exercises", (req, res) => {
    console.log(req.body);
    const data = req.body.daily_exercises as number[];
    const target = req.body.target as number;

    try {
        const args = parseExerciseArguments(data, target);
        const result = exerciseCalculator(args.data, args.target);
        res.send(result).status(200)
    } catch(error: unknown) {
        let errorMessage = 'Something bad happened.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
            res.send(errorMessage).status(400)
        }
    }
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
