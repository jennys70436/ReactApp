import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reactApp from '../reducers'
import saga from '../sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(reactApp, applyMiddleware(sagaMiddleWare, logger))
sagaMiddleWare.run(saga)

export default store
