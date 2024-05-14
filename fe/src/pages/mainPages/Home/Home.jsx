import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("http://localhost:3000/");
    const movies = await response.json();
    console.log(movies);
    setData(movies)
  }
  async function handleDelete(id) {
    const res = await fetch("http://localhost:3000/"+id,{
      method:"delete"
    });
    const data = await res.json();
getData()
  }



  useEffect(() => {
    getData(data)
  }, []);
  
  return (
    <div>
      {data.map((item) => (
        <div className="card " key={item._id}>
          <p>{item.StudentId}</p>
          <p>{item.Name}</p>
          <button onClick={()=>handleDelete(item._id)}>Delete</button>
          <button ><Link to={`Admin/Update/${item._id}`}>Edit</Link></button>
        </div>
      ))}
    </div>
  );
}

export default Home;
