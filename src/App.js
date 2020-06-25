import React,{useState, Fragment,useEffect} from "react";
import AddCategory from "./components/Category/AddCategory";
import axios from 'axios'
import "./App.css";
import CategoryList from "./components/Category/CategoryList";

function App() {
  let [categories,setCategories] = useState([])
  let [loading,setLoading]= useState(true)
  
  useEffect(()=>{
   axios.get('http://localhost:5000/api/qa').then(res=>{
     setCategories(res.data)
     setLoading(false)
 
   })
   
    
  },[])
  return(
    <Fragment>
      {loading ? <h1>Loading</h1>:
        categories.length ===0 ? <AddCategory/> :<CategoryList categories={categories}/>
      }
      
   </Fragment>
   )
}

export default App;
