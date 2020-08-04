import React,{ Fragment,useEffect} from "react";
import AddCategory from "./components/Category/AddCategory";
import {connect} from 'react-redux'

import {getCategoryList} from './store/actions/category'
import "./assets/main.scss";

import CategoryList from "./components/Category/CategoryList";

function App(props) {
  let {category,getCategoryList} = props
  let {loading,categories} = category
 

  
  useEffect(()=>{
  getCategoryList()
   
  },[getCategoryList])

  
  // let addQuestionToBank = (id,bankList)=>{
  //   let question = bankList[0]
  //   let newState = categories.map(item=>{
  //     if(item._id===id) item.bank.push(question)
  //     return item
  //   })
    // setCategories(newState)
  //}
  return(
    <Fragment>
      {loading ? <h1>Loading</h1>:
        categories.length ===0 ? <AddCategory/> :<CategoryList categories={categories} /> 
      }
      
   </Fragment>
   )
}
const mapStateToProps = state =>({
  category:state.category
})

export default connect(mapStateToProps,{getCategoryList})(App);


