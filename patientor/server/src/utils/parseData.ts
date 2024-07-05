import { NewPatient, Gender, Entry } from "../types";

export default function parseData(data: unknown): NewPatient {
  if (!isObject(data)) {
    throw new Error("Incomplete data");
  }

  const requiredFields = ["name", "dateOfBirth", "gender", "ssn", "occupation"];
  validateRequiredFields(data, requiredFields);

  return {
    name: parseName(data.name),
    dateOfBirth: parseDateOfBirth(data.dateOfBirth),
    ssn: parseSsn(data.ssn),
    gender: parseGender(data.gender),
    occupation: parseOccupation(data.occupation),
    entries: parseEntries(data.entries),
  };
}

const parseName = (data: unknown): string => {
  if (!isString(data)) {
    throw new Error("Incorrect or missing name");
  }
  return data;
};

const parseDateOfBirth = (data: unknown): string => {
  if (!isString(data) || !isDate(data)) {
    throw new Error("Incorrect date");
  }
  return data;
};

const parseSsn = (data: unknown): string => {
  if (!isString(data) || !isValidSSN(data)) {
    throw new Error("Invalid SSN " + data);
  }
  return data;
};

const parseGender = (data: unknown): Gender => {
  if (!isString(data) || !isValidGender(data)) {
    throw new Error("Invalid gender");
  }
  return data;
};

const parseOccupation = (data: unknown): string => {
  if (!isString(data)) {
    throw new Error("Incorrect or missing occupation");
  }
  return data;
};

const parseEntries = (data: unknown): Entry[] => {
  if (!Array.isArray(data)) {
    throw new Error("Entries should be an array");
  }

  const entries = data.map((entry) => {
    if (!isValidEntry(entry)) {
      throw new Error("Invalid entry");
    }
    return entry;
  });

  return entries;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isValidSSN = (ssn: string): boolean => {
  const pattern = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
  return pattern.test(ssn);
};

const isValidGender = (text: string): text is Gender => {
  return Object.values(Gender)
    .map((g) => g.toString())
    .includes(text);
};

const isObject = (data: unknown): data is Record<string, unknown> => {
  return typeof data === "object" && data !== null;
};

const validateRequiredFields = (
  data: Record<string, unknown>,
  fields: string[]
): void => {
  for (const field of fields) {
    if (!(field in data)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

const isValidEntry = (data: unknown): data is Entry => {
  if (!isObject(data)) return false;

  if ("type" in data) {
    return (
      data.type === "HealthCheck" ||
      data.type === "OccupationalHealthcare" ||
      data.type === "Hospital"
    );
  }

  return false;
};
