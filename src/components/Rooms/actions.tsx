import * as ACTION_TYPES from './actionTypes'

/**
 * 取得 房型列表
 */
export function getRooms () {
  return {
    type: ACTION_TYPES.GET_ROOMS
  }
}

/**
 *  設定 房型列表
 * @param rooms 房型清單
 */
export function setRooms (rooms) {
  return {
    type: ACTION_TYPES.SET_ROOMS,
    payload: { rooms }
  }
}
