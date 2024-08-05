import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from "./app.js"
dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server running in port: ${process.env.PORT} `)
    })
    app.on("error", (error) => {
        console.log("error: ", error);
        throw error
    })
})
.catch((err) => {
    console.log("mongo db connection failed", err);
})



/*
import express from "express";
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERROR: " error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error) {
        console.error("ERROR: ", error)
    }
})()

*/