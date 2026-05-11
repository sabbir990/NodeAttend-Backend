import app from "./app";
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

let server;

server = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);

        console.log("Application is successfully connected with mongoDB")

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Our Server is running on PORT ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Something went wrong with the connection. The error is : ", error)
    }


}

server()