import * as ACTION_TYPES from './actionTypes'
import { AnyAction } from 'redux'
import moment from 'moment'

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
  category: string
  startDate: Date
  endDate: Date
}

const initialState: RoomsState = {
  roomList: [],
  category: 'all',
  startDate: moment().toDate(),
  endDate: moment().add(1, 'days').toDate()
}

function rooms (state = initialState, action: AnyAction): RoomsState {
  switch (action.type) {
    case ACTION_TYPES.SET_ROOMS:
      return {
        ...state,
        roomList: action.payload.rooms
      }
    case ACTION_TYPES.SET_CATEGORY:
      return {
        ...state,
        category: action.payload.category
      }
    case ACTION_TYPES.SET_DATE:
      return {
        ...state,
        [action.payload.type]: action.payload.date
      }
    default:
      return state
  }
}

export default rooms
