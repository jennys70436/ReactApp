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

interface SetCategoryAction extends Action<string>{
  payload: { category: string }
}

/**
 *  設定 顯示分類
 * @param rooms 房型清單
 */
export function setCategory (category: string) : SetCategoryAction {
  return {
    type: ACTION_TYPES.SET_CATEGORY,
    payload: { category }
  }
}

interface SetDateAction extends Action<string>{
  payload: { type: string, date: Date }
}

/**
 *  設定 預定日期
 * @param type startDate/endDate
 * @param date 選取日期
 */
export function setDate (type: string, date: Date) : SetDateAction {
  return {
    type: ACTION_TYPES.SET_DATE,
    payload: { type, date }
  }
}

/**
 * 預定 房型
 */
export function book (): Action<string> {
  return {
    type: ACTION_TYPES.BOOK
  }
}
