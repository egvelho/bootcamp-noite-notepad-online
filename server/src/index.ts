import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { notepads } from "./routes/notepads";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/notepads", notepads);

const port = 8080;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Servidor express iniciado em http://${host}:${port}`);
});
