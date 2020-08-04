import {ADD_CATEGORY,ADD_QUESTION,GET_CATEGORY_LIST} from '../types'

const initialState = {
    categories:[],
    loading:true
}
export default function (state=initialState, action){
    const {type,payload} = action
    switch(type){
        case ADD_CATEGORY:
            return {
                ...state,
                categories:state.categories.push(payload),
                loading:false
            }
        case ADD_QUESTION:
            let {id,bankList} = payload
            console.log('banklist payload',payload)
            let question = bankList[0]
            let newCategory = state.categories.map(item=>{
                    if(item._id===id) item.bank.push(question)
                     return item
               }) 
            return {...state,categories:newCategory,loading:false}
        case GET_CATEGORY_LIST:
            return {...state,categories:payload,loading:false}
        default:
            return state
    }
}