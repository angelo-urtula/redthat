import userReducer from './userReducer'
import postReducer from './postReducer'
import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    user: userReducer,
    post: postReducer
})

export default combinedReducers