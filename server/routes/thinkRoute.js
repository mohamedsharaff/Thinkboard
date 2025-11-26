import express from "express";
import { create, details, read, remove, update } from "../controllers/thinkController.js";


const route = express.Router();

route.get("/" , read );
route.post("/" , create );
route.put("/:id" , update );
route.delete("/:id" , remove );
route.get("/:id" ,  details );

export default route;