import React from 'react'
import { useState,useEffect } from 'react'

function Product() {
    const [data,setData]=useState([])
   async function getData(params) {
        const response = await fetch("http://localhost:3000/");
        const movies = await response.json();
        console.log(movies);
        setData(movies)
    }
    async function handleUpdate(id) {
        let updateData= await getData(id )
        setData(updateData)
       
         }       
    
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      {data.map((item)=>(
          <div className="card">
          <p>{item.StudentId}</p>
          <p>{item.Name}</p>
          <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Product
