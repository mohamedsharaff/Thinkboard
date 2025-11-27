import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



export default async function connection () {

    const conn = await mongoose.connect(process.env.MONGO_DB);

    //verify is it running 
    console.log("mongo db connected successfully");        



}