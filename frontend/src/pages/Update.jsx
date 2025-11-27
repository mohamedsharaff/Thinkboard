import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import api from '../lib/api';


const Update = () => {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const nav = useNavigate();

    const {id} = useParams();

    //using effect function from react library to fetch data
    useEffect(()=>{

        async function fetchData() {

            const read = await api.get('/'+id);
            setTitle(read.data.title);
            setNote(read.data.note);
            
        }

        fetchData();

    },[]);

    async function updateThink() {

        await api.put("/"+id , {title,note});
        nav("/");
        
    }


  return (
    <div>

        <div className="container">

            <br />

            <Link to={"/"} className='text-info'> Go Back</Link>

            <h4 className='mt-4 mb-4 text-success'><b>UPDTAE YOUR THOUGHTS HERE ! </b></h4>

            <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Title' className='form-control mt-2 bg-dark text-success border-success' />
            <textarea value={note} onChange={(e) => {setNote(e.target.value)}} type="text" style={{height:150}} placeholder='Note' className='form-control mt-2 bg-dark text-success border-success'  />

            <button onClick={updateThink} className='btn btn-outline-success mt-3' > Update </button>

        </div>
      
    </div>
  )
}

export default Update
