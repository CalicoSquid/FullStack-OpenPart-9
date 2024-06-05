import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from "./routes/patients";


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);



app.get("/api/ping", (_req, res) => {
    res.send("pong");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});