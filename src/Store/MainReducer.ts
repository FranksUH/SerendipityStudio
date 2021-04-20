import { combineReducers } from 'redux'
import userReducer from './../Store/UserReducer'

const mainReducer = combineReducers({
    user: userReducer,
});

export default mainReducer;