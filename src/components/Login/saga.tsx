import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as ACTION_TYPES from './actionTypes'

export default function * saga () {
  yield takeEvery(ACTION_TYPES.INIT, init)
}

function * init () {
  console.log('login init')
}
