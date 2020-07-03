import {SET_TEXT_FITLER,SET_LEVEL_FILTER} from '../types'


export const setTextFilter = (text) => async dispatch =>{

    dispatch({
        type:SET_TEXT_FITLER,
        payload:text
    })
   
}

export const setLevelFilter = (level) => async dispatch =>{
  
      dispatch({
          type:SET_LEVEL_FILTER,
          payload:level
      })
     
  }


