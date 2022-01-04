import { all } from 'redux-saga/effects'
import homePageSaga from '../components/HomePage/saga'
import roomsSaga from '../components/Rooms/saga'

export default function * rootSaga () {
  yield all([
    homePageSaga(),
    roomsSaga()
  ])
}
