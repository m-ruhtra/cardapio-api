import "express-async-errors";
import "reflect-metadata";
import "dotenv";

import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";
import { HandleErrors } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());

app.use(HandleErrors.execute);
