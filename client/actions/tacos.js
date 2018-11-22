import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_TACOS = 'RECEIVE_TACOS'
export const REQUEST_TACOS = 'REQUEST_TACOS'

export const requestTacos = () => {
  return {
    type: REQUEST_TACOS
  }
}

export const receiveTacos = (tacos) => {
  return {
    type: RECEIVE_TACOS,
    tacos: tacos.map(taco => taco.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchTacos() {
  return (dispatch) => {
    dispatch(requestTacos())
    return request
      .get('api/v1/taco')
      .then(res => {
        dispatch(receiveTacos(res.body))
        console.log(res.body[0])
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
