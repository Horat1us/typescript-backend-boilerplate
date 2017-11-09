import * as express from "express";

import * as bodyParser from "body-parser";
import * as cors from "cors";

import { BookController } from "./controllers/BookController";

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));

app.use("/book", BookController);
