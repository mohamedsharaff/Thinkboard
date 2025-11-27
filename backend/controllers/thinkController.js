import thinkboardModel from "../models/thinkModel.js";

export async function create ( req, res ) {

    const {title, note} = req.body;

    await thinkboardModel.create({title,note});
    res.json("created");

}

export async function read ( req, res ) {

    const read = await thinkboardModel.find();
    res.json(read);

}

export async function update ( req, res ) {

    //store prameter id as a variable
    const id = req.params.id;
    
    //define { title, note } from front end   
    const {title, note} = req.body;

    //update script
    // await dataModel.findByIdAndUpdate(update_element_id,{ title, note });
    await thinkboardModel.findByIdAndUpdate(id,{ title, note });

    //response
    res.json("updated");


}

export async function remove ( req, res ) {

    await thinkboardModel.findByIdAndDelete(req.params.id);
    res.json("delete successfully");

}

export async function details ( req, res ) {

    const read = await thinkboardModel.findById(req.params.id);
    res.json(read);    

}

