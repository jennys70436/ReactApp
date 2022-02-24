import { combineReducers } from 'redux'
import homePage, { HomePageState } from '../components/HomePage/reducer'
import rooms, { RoomsState } from '../components/Rooms/reducer'

export interface ReactAppState {
  homePage: HomePageState
  rooms: RoomsState
}

const reactApp = combineReducers({
  homePage,
  rooms
})

export default reactApp
