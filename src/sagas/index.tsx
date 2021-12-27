import { all } from 'redux-saga/effects'
import loginSaga from '../components/Login/saga'
import page1Saga from '../components/Page1/saga'

export default function * rootSaga () {
  yield all([
    loginSaga(),
    page1Saga()
  ])
}
