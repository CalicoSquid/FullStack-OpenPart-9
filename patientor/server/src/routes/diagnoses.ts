import express from "express";
const router = express.Router();
import diagnosisServices from "../services/diagnosesServices";

router.get("/", (_req, res) => {
    res.send(diagnosisServices.getDiagnoses());
});

export default router;