import * as ACTION_TYPES from '../actionTypes'

export function init () {
  return {
    type: ACTION_TYPES.INIT
  }
}

export function addTodo (todo) {
  return {
    type: ACTION_TYPES.ADD_TODO,
    payload: { todo }
  }
}

export function sagaFetchTest () {
  return {
    type: ACTION_TYPES.SAGA_FETCH_TEST
  }
}
export function setTest () {
  return {
    type: ACTION_TYPES.SET_TEST
  }
}
