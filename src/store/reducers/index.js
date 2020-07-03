import {combineReducers} from 'redux'
import filter from './filter'
import category from './category'

export default combineReducers({
    filter,
    category
})

