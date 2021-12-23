import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as ACTION_TYPES from '../actionTypes'
import * as actions from '../actions'

export default function * root () {
  yield all([rootSaga()])
}

function * rootSaga () {
  yield takeEvery(ACTION_TYPES.SAGA_FETCH_TEST, sagaFetchTest)
}

function * sagaFetchTest () {
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json())
  )
  console.log(data)
  yield put(actions.addTodo('saga'))
}
