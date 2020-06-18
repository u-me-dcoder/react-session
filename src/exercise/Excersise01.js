import React from 'react'
import {useFormik} from 'formik'
export default function Excersise01() {
    const userForm = useFormik({
        initialValue:{
            username:'',
            password:'',
        },
        onSubmit: values =>{
            console.log('Form data',values)
        }

    });
    console.log(userForm.values)
    return (
        <form onSubmit={userForm.handleSubmit}>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" name='username' className="form-control" onChange={userForm.handleChange} value={userForm.values.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" name='password' className="form-control" onChange={userForm.handleChange} value={userForm.values.password}/>
            </div>
        </form>
    )
}
