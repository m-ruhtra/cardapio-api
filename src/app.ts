import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";

export const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
