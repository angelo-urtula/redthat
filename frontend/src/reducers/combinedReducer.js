import user from './userReducer.js'
import post from './postReducer.js'
import { combineReducers } from "redux"

const combinedReducers = combineReducers({
    user,
    post
})

export default combinedReducers