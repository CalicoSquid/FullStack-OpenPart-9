import data from "../data/diagnoses.ts";
import { Diagnoses } from "../types";

const diagnoses: Diagnoses[] = data as Diagnoses[];

export const getDiagnoses = (): Diagnoses[] => diagnoses;
