import express from "express";
const router = express.Router();
import patientService from "../services/patientService";
import parseData from "../utils/parseData";

import {
  EntryWithoutId,
} from "../types";

router.get("/", (_req, res) => {
  res.send(patientService.getPatients());
});

router.get(`/:id`, (req, res) => {
  const id = req.params.id;
  res.send(patientService.getPatientById(id));
});

router.post("/", (req, res) => {
  try {
    const newPatient = parseData(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.send(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.post("/:id/entries", (req, res) => {
  const newEntry: EntryWithoutId = req.body as EntryWithoutId;
  const patientId = req.params.id;
  console.log(newEntry);
  try {
    res.send(patientService.addEntry(newEntry, patientId));
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
  
});

export default router;
