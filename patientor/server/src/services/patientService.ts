import data from "../data/patients";
import { v1 as uuid } from "uuid";
import { NonSensitivePatient, NewPatient, Patient } from "../types";
import parseData from "../utils/parseData";

const getPatients = (): NonSensitivePatient[] => {

  const x = data.map(d=> {
    const id = d.id;
    const newData = parseData(d);
    return {
      id: id,
      name: newData.name,
      dateOfBirth: newData.dateOfBirth,
      occupation: newData.occupation,
      gender: newData.gender
    };
  });
  return x;
};

const addPatient = (newPatient: NewPatient): Patient => {
  console.log(newPatient);
  const id = uuid();
  const patientToAdd = {
    id,
    ...newPatient
  };
  
  data.push(patientToAdd);
  return patientToAdd;
};

export default {
  getPatients,
  addPatient,
};
