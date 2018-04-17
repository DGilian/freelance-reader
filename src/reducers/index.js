import { combineReducers } from 'redux'
import contractView from './contractViewReducer'
import ruleCollection from './rulesCollectionReducer'

export default combineReducers({
  contractView,
  ruleCollection
})
