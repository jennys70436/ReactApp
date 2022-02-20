import * as ACTION_TYPES from './actionTypes'

const initialState = {
  roomList: []
}

function page1 (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_ROOMS:
      return {
        ...state,
        roomList: action.payload.rooms
      }
    default:
      return state
  }
}

export default page1
