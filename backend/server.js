import express from "express";
import dotenv from "dotenv";
import route from "./routes/thinkRoute.js";
import  connection  from "./database.js";
import cors from 'cors'

import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();


//connect mongo db
connection();
//using json format for use mongodb data 
app.use(express.json());

//set vetify front end address
if (process.env.NODE_ENV !== "production") {

    app.use(cors({origin:"http://localhost:5173"}));
    
}

//middleware
//store route groups
app.use("/thinkboard",route);

//deploy futures
if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*", (req,res) => {

    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))

} )

    
}

//set port for running
app.listen(process.env.PORT,console.log("Running on " + process.env.PORT));
