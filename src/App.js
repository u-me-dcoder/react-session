import React,{useState, Fragment,useEffect} from "react";
import AddCategory from "./components/Category/AddCategory";
import axios from 'axios'
import "./assets/main.scss";

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
  let addQuestionToBank = (id,bankList)=>{
    let question = bankList[0]
    let category = categories.filter(item=>item._id===id)
    let temp = categories.filter(item=>item._id!==id)
    category[0].bank.push(question)
    console.log([category,temp])
    setCategories([...category,...temp])
  }
  return(
    <Fragment>
      {loading ? <h1>Loading</h1>:
        categories.length ===0 ? <AddCategory/> :<CategoryList categories={categories} addQuestionToBank={addQuestionToBank}/> 
      }
      
   </Fragment>
   )
}

export default App;


