import {combineReducer} from 'redux'
import storeReducer from "./store"

export default combineReducer({
    store: storeReducer
})