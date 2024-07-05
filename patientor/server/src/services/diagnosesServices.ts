import data from "../data/diagnoses.ts";
import { Diagnoses } from "../types";


const diagnoses: Diagnoses[] = data as Diagnoses[];

const getDiagnoses = (): Diagnoses[] => diagnoses;

export default {
    getDiagnoses,
};
