import * as ACTION_TYPES from '../actionTypes'

const initState = {
  page: 'home',
  work: false,
  todo: ''
}

const reactApp = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return {
        ...state,
        page: 'test'
      }
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todo: action.payload.todo
      }
    default:
      return state
  }
}

export default reactApp
