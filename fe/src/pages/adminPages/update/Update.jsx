import React from 'react'
import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
function Update() {
    const [update,setUpdate] = useState([]);
    const [data, setData] = useState([]);
let{id}=useParams()
async function getData() {
    const response = await fetch("http://localhost:3000/");
    const movies = await response.json();
    console.log(movies);
    setData(movies)
  }
  
  useEffect(() => {
    getData(data)
  }, []);
  return (
    <div>
     <Formik
       initialValues={{ Name: '', StudentId: '' }}
       validationSchema={Yup.object({
         Name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         StudentId: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values) => {
       fetch("http://localhost:3000/", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
       }}
     >
       <Form>
         <label htmlFor="Name"> Name</label>
         <Field name="Name" type="text" />
         <ErrorMessage name="Name" />
 
         <label htmlFor="StudentId">id</label>
         <Field name="StudentId" type="text" />
         <ErrorMessage name="StudentId" />

 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Update
