import React,{useState} from "react";

export default function Exercise03() {

    let [formData, setFormData] = useState({
        school:'',
        location:'',
        grade:'',
        section:'',
        rank:'',
        profile:undefined
    })
    let {school,location,grade,section,rank}=formData

    const handleChange = e =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div>
      <h1>Add Category</h1>
      <form encType="multipart/form-data" onSubmit={e=>handleSubmit(e)}> 
        <div className="form-group">
          <label htmlFor="">School Name</label>
          <input type="text" name="school" value={school} onChange={e=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Location</label>
          <input type="text" name="location" value={location} onChange={e=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Grade</label>
          <input type="text" name="grade" value={grade} onChange={e=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Section</label>
          <input type="text" name="section" value={section} onChange={e=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Rank</label>
          <input type="text" name="rank" value={rank} onChange={e=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Profile</label>
          <input type="file" name="profile" onChange={e=>setFormData({...formData,[e.target.name]:e.target.files[0]})}/>
        </div>
      
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
