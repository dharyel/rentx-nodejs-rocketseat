import 'reflect-metadata'
import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";


import "./database";

import './shared/container';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.get("/", (request: Request, response: Response) => {
    return response.json({ msg: "Hello, world!" });
});

app.listen(3333, () => console.log("Server is running!"));
