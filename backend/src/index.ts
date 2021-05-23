import express = require("express");
import { Request, Response, NextFunction } from "express";
import bodyParser = require("body-parser");
import { appRouter } from "./app";
import { dbConnect, dbDisconnect } from "./db/connection";
import { createFirstUser } from "./utils/createAdmin";
const cors = require("cors");

const app = express();
const PORT = "8080";
let server: any;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server = app.listen(PORT, async () => {
    await dbConnect();
    // Uncomment the below function to create the first admin user
    await createFirstUser();
    console.log(`started listening on port ${PORT}`);
    return server;
});

export const stop = () => {
    try {
        if (server) {
            dbDisconnect();
            server.close(() => {
                return true;
            });
        } else {
            return true;
        }
    } catch (error) {
        return false;
    }
};

app.use(cors());

app.use("/v1", appRouter);
app.all("/healthz", (req: Request, res: Response) => {
    res.status(200).json("OK");
});
app.get("*", (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ code: 404, message: "Invalid value of URL" });
});
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ code: 404, message: "Invalid value of URL" });
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ code: 404, message: err });
});
