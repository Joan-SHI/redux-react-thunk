import {RECEIVE_TACOS} from '../actions'

function tacoReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_TACOS:
      return action.tacos
    default:
      return state
  }
}

export default tacoReducer