import axios from 'axios'
import {GET_CATEGORY_LIST,ADD_CATEGORY, ADD_QUESTION} from '../types'
export const getCategoryList = ()=> async dispatch =>{
    try {
      
        let res = await axios.get('http://localhost:5000/api/qa')
        dispatch({
            type:GET_CATEGORY_LIST,
            payload:res.data
        })

    } catch (error) {
        console.log(error)
    }
}


export const addCategory = formData=> async dispatch =>{
    try {
      
        
        let config = {
            method: 'post',
            url: 'http://localhost:5000/api/qa/',
            data : formData
          };
         let res= await axios(config)
        dispatch({
            type:ADD_CATEGORY,
            payload:res.data
        })

    } catch (error) {
        console.log(error)
    }
}


export const addQuestion = (id,values)=> async dispatch =>{
    try {
      
        let config = {
            method: "put",
            url: `http://localhost:5000/api/qa/category/${id}`,
            data: values,
          };
        let res= await axios(config).then((res)=>{
            console.log('response',res)
        })
         
        let apiPromise = new Promise((resolve,reject)=>{
            resolve(true);
            reject(false)
        }) 
        
        dispatch({
            type:ADD_QUESTION,
            payload:{
                id,
                bankList:res.data
            }
        })

        return apiPromise
    

    } catch (error) {
        console.log(error)
    }
}
