import * as ACTION_TYPES from './actionTypes'
import { AnyAction } from 'redux'

export interface Room {
  bed: string
  cardImg: string
  detailImg: string
  id: string
  name: string
  price: string
  size: string
}

export interface RoomsState {
  roomList: Room[]
}

const initialState: RoomsState = {
  roomList: []
}

function rooms (state = initialState, action: AnyAction): RoomsState {
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

export default rooms
