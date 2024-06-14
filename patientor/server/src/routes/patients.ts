import express from "express";
const router = express.Router();
import patientService from "../services/patientService";
import parseData from "../utils/parseData";

router.get("/", (_req, res) => {
    res.send(patientService.getPatients());
});

router.post("/", (req, res) => {
    try {
        const newPatient = parseData(req.body);
        const addedPatient = patientService.addPatient(newPatient);
        res.send(addedPatient);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
      }
});

export default router;