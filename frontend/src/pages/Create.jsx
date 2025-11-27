import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router';
import api from "../lib/api.js"


const Create = () => {


    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const nav = useNavigate();


    async function createNote() {
        
        await api.post('/',{title,note});
        nav("/");
        
    }

  return (

        <div className="container">

            <br />

            <Link to={"/"} className='text-info'> Go Back</Link>

            <h4 className='mt-4 mb-4 text-success'><b>PUT YOUR NEW THOUGHTS HERE ! </b></h4>

            <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Title' className='form-control mt-2 bg-dark text-success border-success' />
            <textarea onChange={(e) => {setNote(e.target.value)}} type="text" style={{height:150}} placeholder='Note' className='form-control mt-2 bg-dark text-success border-success'  />

            <button onClick={createNote} className='btn btn-outline-success mt-3' > Save </button>

        </div>
      
  )
}

export default Create
