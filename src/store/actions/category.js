import axios from 'axios'
import {GET_CATEGORY_LIST} from '../types'
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

