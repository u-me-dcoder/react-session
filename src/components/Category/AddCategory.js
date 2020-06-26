import React from "react";
import { Formik } from "formik";
import axios from 'axios'
import {AddCategorySchema} from '../../schema/FormSchema'
export default function AddCategory() {
 

 

  return (
    <div>
      <h1>Add Category</h1>

      <Formik
        initialValues={{
          name: "",
          avatar: undefined,
        }}
          onSubmit={(values,props) => {
            let {name,avatar} = values
            let formData = new FormData()
            formData.append('name',name)
            formData.append('avatar',avatar)
        
      
            
            let config = {
              method: 'post',
              url: 'http://localhost:5000/api/qa/',
              data : formData
            };
          
            axios(config).then(res=>{
              console.log(res)
              props.resetForm()
            })
        
          }}
        validationSchema={AddCategorySchema}
        
      >
        {(props) => {
         
            let {values,handleSubmit,handleChange,setFieldValue,errors,handleBlur,touched} =props
            console.log('this is the touched object',touched)
            let { name } = values;
          return (
            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="">Category Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && <span style={{color:'red'}}>{errors.name}</span>}
              </div>
           
              <div className="form-group">
                <label htmlFor="">Avatar</label>
                <input
                  type="file"
                  name="avatar"
                  onChange={e=>setFieldValue('avatar',e.target.files[0])}
                  onBlur={handleBlur}
                />
                  {touched.avatar && errors.avatar && <span style={{color:'red'}}>{errors.avatar}</span>}
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
