import { combineReducers } from 'redux'
import homePage, { HomePageState } from '../components/HomePage/reducer'
import rooms, { RoomsState } from '../components/Rooms/reducer'
import { reducer as modalReducer } from 'redux-saga-modal'

export interface ReactAppState {
  homePage: HomePageState
  rooms: RoomsState
}

const reactApp = combineReducers({
  homePage,
  rooms,
  modals: modalReducer
})

export default reactApp
