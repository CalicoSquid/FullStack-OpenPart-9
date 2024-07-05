import data from "../data/patients";
import { v1 as uuid } from "uuid";
import {
  NonSensitivePatient,
  NewPatient,
  Patient,
  Entry,
  EntryWithoutId,
} from "../types";
import parseData from "../utils/parseData";

const getPatients = (): NonSensitivePatient[] => {
  const patientList = data.map((d) => {
    const id = d.id;
    const newData = parseData(d);
    return {
      id: id,
      name: newData.name,
      dateOfBirth: newData.dateOfBirth,
      occupation: newData.occupation,
      gender: newData.gender,
      entries: newData.entries,
    };
  });
  return patientList;
};

const getPatientById = (patientId: string): Patient | undefined => {
  const result = data.find((d) => d.id === patientId);

  if (!result) return undefined;

  const patient = { id: patientId, ...parseData(result) };

  return patient;
};

const addPatient = (newPatient: NewPatient): Patient => {
  const id = uuid();
  const patientToAdd = {
    id,
    ...newPatient,
  };

  data.push(patientToAdd);
  return patientToAdd;
};

const addEntry = (newEntry: EntryWithoutId, patientId : string): Entry => {
  const id = uuid();
  const entry = {
    id,
    ...newEntry,
  };
  const patientToEdit = data.find(d => d.id === patientId);
  if(patientToEdit) {
    const patientToReplace = patientToEdit.entries.push(entry);
    console.log(patientToReplace);
  }
  
  return entry;
};

export default {
  getPatients,
  getPatientById,
  addPatient,
  addEntry,
};
