import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as actions from './actions'
import * as ACTION_TYPES from './actionTypes'
import roomJson from '../../data/rooms.json'

export default function * saga () {
  yield takeEvery(ACTION_TYPES.GET_ROOMS, getRooms)
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
