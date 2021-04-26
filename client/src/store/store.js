import {combineReducers} from "redux"
import imdbReducer from "./IMDB"
import shoppiesReducer from "./shoppies"

export default combineReducers({
    IMDB: imdbReducer,
    shoppies: shoppiesReducer
    
})