import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
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

export default Add
