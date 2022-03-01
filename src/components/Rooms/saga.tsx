import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as ACTION_TYPES from './actionTypes'
import roomJson from '../../data/rooms.json'
import { ReactAppState } from '../../reducers'
import { createMessageBox } from '../Share/MessageBox/saga'
import moment from 'moment'

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
function * book (action: actions.BookAction) {
  try {
    const { startDate, endDate } = yield select((state: ReactAppState) => state.rooms)
    if (moment(startDate).format('YYYYMMDD') >= moment(endDate).format('YYYYMMDD')) {
      yield call(createMessageBox, { text: '起始日不可大於等於結束日', title: '錯誤', type: 'msg' })
      return
    }
    if (moment(startDate).format('YYYYMMDD') < moment().format('YYYYMMDD')) {
      yield call(createMessageBox, { text: '起始日期小於今天', title: '錯誤', type: 'msg' })
      return
    }
    const { name } = action.payload
    const confirm: boolean = yield call(createMessageBox, { text: `訂房資訊如下: ${name} ${moment(startDate).format('YYYY/MM/DD')}~${moment(endDate).format('YYYY/MM/DD')}`, title: '預訂', type: 'confirm' })
    if (confirm) yield call(createMessageBox, { text: '預訂成功', title: 'Success', type: 'msg' })
  } catch (e) {
    console.log(`book fail: ${e}`)
  }
}
