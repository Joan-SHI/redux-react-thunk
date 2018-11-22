import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import tacoReducer from './tacoReducer'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  tacoReducer
})
