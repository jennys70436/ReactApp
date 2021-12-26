import * as ACTION_TYPES from './actionTypes'

const initialState = {
  login: false
}

function login (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return {
        ...state,
        login: true
      }
    default:
      return state
  }
}

export default login
