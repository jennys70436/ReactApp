import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as ACTION_TYPES from './actionTypes'
import roomJson from '../../data/rooms.json'
import { ReactAppState } from '../../reducers'
import { createMessageBox } from '../Share/MessageBox/saga'

export default function * saga () {
  yield takeEvery(ACTION_TYPES.GET_ROOMS, getRooms)
  yield takeEvery(ACTION_TYPES.BOOK, book)
}

const url = {
  static: roomJson,
  SQL: 'http://localhost:8080/api/room'
}

/**
 * 取得房型列表
 */
function * getRooms () {
  try {
    const data = yield call(() => fetch(url[API_SOURCE], {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json()))
    yield put(actions.setRooms(data))
  } catch (e) {
    console.log(`getRoomsinit fail: ${e}`)
  }
}

/**
 * 預定房型
 */
function * book () {
  try {
    const { startDate, endDate } = yield select((state: ReactAppState) => state.rooms)
    const confirm: boolean = yield call(createMessageBox, { text: 'Are u sure?', title: 'TestTest', type: 'confirm' })
  } catch (e) {
    console.log(`book fail: ${e}`)
  }
}
