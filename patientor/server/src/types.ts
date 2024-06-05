export type Diagnoses = {
    code: string;
    name: string;
    latin?: string;
};

//type Gender = "male" | "female" | "other";

interface Patient {
    id: string;
    name: string;
    occupation: string;
    gender: string;
    ssn?: string;
    dateOfBirth?: string;
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;
