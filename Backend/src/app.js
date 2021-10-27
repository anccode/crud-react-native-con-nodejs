import express from "express";
import cors from "cors";
import morgan from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJsdoc(options)

import tasksRouter from "./routes/tasks"
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(tasksRouter)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app