import data from "../data/patients";
import { NonSensitivePatient } from "../types";


const getPatients = (): NonSensitivePatient[] => {
    console.log(data);
    return data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

export default {
    getPatients
};

