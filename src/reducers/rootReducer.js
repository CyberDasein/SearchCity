import {combineReducers} from 'redux'
import { sityReducer } from './sityReducer'


export const rootReducer = combineReducers({
    app: sityReducer,
})