import express from "express";
const router = express.Router();

import diagnoses from "../data/diagnoses";

router.get("/", (_req, res) => {
    res.send(diagnoses);
});

export default router;