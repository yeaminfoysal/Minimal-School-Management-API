import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import app from "./app";
import { Server } from "http"

let server: Server

const startServer = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`)

        console.log("connected to db");

        server = app.listen(3000, () => {
            console.log(`Server is listening to port 3000`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()