import {ADD_CATEGORY,ADD_QUESTION,GET_CATEGORY_LIST} from '../types'

const initialState = {
    categories:[],
    loading:true
}
export default function (state=initialState, action){
    const {type,payload} = action
    switch(type){
        case ADD_CATEGORY:
            return state
        case ADD_QUESTION:
            return state
        case GET_CATEGORY_LIST:
            return {...state,categories:payload,loading:false}
        default:
            return state
    }
}