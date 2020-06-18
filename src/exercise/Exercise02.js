import React,{useState} from "react";

export default function Exercise02() {

    let [name,setName] = useState('')
    let [filename,setFilename] = useState('')


    console.log('category name',name)
    console.log('filename',filename)


   let  handleChange = e =>{
        e.preventDefault()
       
         setFilename(e.target.files[0])
         console.log(filename)
    }

    let handleSubmit = e =>{
        e.preventDefault()
       
    }

  return (
    <div>
      <h1>Add Category</h1>
      <form encType="multipart/form-data" onSubmit={e=>handleSubmit(e)}> 
        <div className="form-group">
          <label htmlFor="">Category Name</label>
          <input type="text" name="title" value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Category Image</label>
          <input type="file" name="avatar"  onChange={e =>handleChange(e)}/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
