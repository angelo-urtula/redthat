import userReducer from './userReducer.js'
import postReducer from './postReducer.js'
import { combineReducers } from "redux"

const combinedReducers = combineReducers({
    user: userReducer,
    post: postReducer
})

export default combinedReducers