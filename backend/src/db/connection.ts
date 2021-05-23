import { connect, disconnect } from "mongoose";
import { appConfig } from "../config/appConfig";

export const dbConnect = async () => {
    // Connect to DB
    connect(appConfig.mongo_url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        keepAlive: true,
    })
        .then(() => {
            console.log("DB connected!");
        })
        .catch((err) => {
            console.log(`Error in connecting DB: ${err.message}`),
                setTimeout(dbConnect, 5000);
        });
};

export const dbDisconnect = async () => {
    return disconnect();
};
