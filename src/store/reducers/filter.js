import {SET_TEXT_FITLER,SET_LEVEL_FILTER} from '../types'

const initialState={
    text:'',
    level:''
}


export default function(state=initialState,action){
    const {type,payload}=action
    switch(type){
        case SET_TEXT_FITLER:
            return {...state,text:payload}
        case SET_LEVEL_FILTER:
            return {...state,level:payload}
        default:
            return state
    }
}