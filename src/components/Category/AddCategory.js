import React from "react";
import { Formik } from "formik";
export default function AddCategory() {
 

 

  return (
    <div>
      <h1>Add Category</h1>

      <Formik
        initialValues={{
          school: "",
          location: "",
          grade: "",
          section: "",
          rank: "",
          profile: undefined,
        }}
        onSubmit={(props) => {
          console.log(props);
        }}
        
      >
        {(props) => {
            //console.log(props)
             console.log(props.values)
            let {values,handleSubmit,handleChange,setFieldValue} =props
            let { school, location, grade, section, rank } = values;
          return (
            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="">School Name</label>
                <input
                  type="text"
                  name="school"
                  value={school}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Grade</label>
                <input
                  type="text"
                  name="grade"
                  value={grade}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Section</label>
                <input
                  type="text"
                  name="section"
                  value={section}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Rank</label>
                <input
                  type="text"
                  name="rank"
                  value={rank}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Profile</label>
                <input
                  type="file"
                  name="profile"
                  onChange={e=>setFieldValue('profile',e.target.files[0])}
                  
                />
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
