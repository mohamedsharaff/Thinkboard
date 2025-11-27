import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { formatDate } from '../lib/utils';
import api from '../lib/api';

const Home = () => {


    //define state 2 arguments as an array format
    const [thinks,setThinks] = useState([]);

    //using effect function from react library to fetch data
    useEffect(()=>{

        async function fetchData() {

            const read = await api.get("/");
            setThinks(read.data);
            
        }

        fetchData();

    },[]);

    async function deleteAction(id) {

        await api.delete('/'+id);
        window.location.reload();
        
    }

    // console.log(thinks);
    
  return (
    <div className='container bg-dark'>

            {/* <h3 className='mt-3 mb-2'><b>Thinks</b></h3> */}

            <div className="row mt-4">

            {
                thinks.map(think => (
                    

                    <Link to={`/${think._id}`} style={{textDecoration:'none'}}>
                    <div class="card card-body bg-dark border border-success m-1" style={{width:300}} >
                        <h4 class="card-title text-success"><b>{think.title}</b></h4>
                        <p class="card-text text-secondary"><i>{think.note}</i></p>
                        <p class="card-text text-secondary"><i>{formatDate(new Date(think.createdAt))}</i></p>

                        <div className='row' style={{display:'flex', width:'100%'}}>
                            <Link to={"/"+think._id} className='text-success ml-3' ><b>Edit</b></Link>
                            <Link onClick={() => {deleteAction(think._id)}} className='text-danger  ml-4'><b>Delete</b></Link>
                        </div>
                    </div>
                    </Link>


                ))
            }

            </div>


        

                   
          
          

      
    </div>
  )
}

export default Home
