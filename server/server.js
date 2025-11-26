import express from "express";
import dotenv from "dotenv";
import route from "./routes/thinkRoute.js";
import  connection  from "./database.js";
import cors from 'cors'

dotenv.config();

const app = express();


//connect mongo db
connection();
//using json format for use mongodb data 
app.use(express.json());

//set vetify front end address
app.use(cors({origin:"http://localhost:5173"}));

//middleware
//store route groups
app.use("/thinkboard",route);

//set port for running
app.listen(process.env.PORT,console.log("Running on " + process.env.PORT));
