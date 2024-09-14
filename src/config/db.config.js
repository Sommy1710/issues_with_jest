import mongoose from "mongoose";
import {config} from "dotenv";



export const initializeDatabaseConnection = () =>
{
    config();
    let mongoUri;
    switch (process.env.NODE_ENV)
    {
        case "test":
            mongoUri = process.env.MONGO_URI_TEST;
            break;

        case "development":
            mongoUri = process.env.MONGO_URI_DEV;
            break;

        default:
            mongoUri = process.env.MONGO_URI;
    }

    mongoose.connect(mongoUri);
    mongoose.connection.on("connected", () => console.log('connected to the database'));
    mongoose.connection.on("error", (error) => console.log("Error connecting to the database", error));
}

export const dropDatabase = () =>
{
    mongoose.connection.dropDatabase();
}