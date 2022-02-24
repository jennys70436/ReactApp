import * as ACTION_TYPES from './actionTypes'
import { Action } from 'redux'
import { Room } from './reducer'

/**
 * 取得 房型列表
 */
export function getRooms (): Action<string> {
  return {
    type: ACTION_TYPES.GET_ROOMS
  }
}

interface SetRoomsAction extends Action<string>{
  payload: { rooms: Room[] }
}

/**
 *  設定 房型列表
 * @param rooms 房型清單
 */
export function setRooms (rooms: Room[]) : SetRoomsAction {
  return {
    type: ACTION_TYPES.SET_ROOMS,
    payload: { rooms }
  }
}
