import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as ACTION_TYPES from './actionTypes'

export default function * saga () {
  yield takeEvery(ACTION_TYPES.INIT1, init)
}

function * init () {
  console.log('page1 init')
}
