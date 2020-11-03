import { combineReducers } from 'redux'
import { featuresReducer } from './featuresReducer'
import { totalReducer } from './totalReducer'

export default combineReducers({featuresReducer, totalReducer})