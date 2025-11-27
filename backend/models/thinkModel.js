import mongoose from "mongoose";
const Schema = mongoose.Schema;

const thinkSchema = new Schema({
  title: {
    type: String ,
    required: false
  } ,
  
  note: {
    type: String ,
    required: false
  } 
},{timestamps : true});

const thinkboardModel = mongoose.model("thinkboard", thinkSchema );
export default thinkboardModel;