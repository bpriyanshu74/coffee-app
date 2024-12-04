import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.DB_URI}/${DB_NAME}`,
        );
        console.log("connection success", connectionInstance);
    } catch (error) {
        console.log("error encountered", error);
        process.exit(1);
    }
};

export { connectDB };
