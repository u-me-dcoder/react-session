import React,{useState, Fragment,useEffect} from "react";
import AddCategory from "./components/Category/AddCategory";
import axios from 'axios'
import "./App.css";

function App() {
  let [categories,setCategories] = useState([])
  
  useEffect(()=>{
   axios.get('http://localhost:5000/api/qa').then(res=>{
     setCategories(res.data)
 
   })
   
    
  },[])
  return(
    <Fragment>
      { categories.length === 0 ? (<AddCategory/>):(<AddCategory/>)}
   </Fragment>
   )
}

export default App;
