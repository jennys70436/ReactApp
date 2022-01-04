import { combineReducers } from 'redux'
import homePage from '../components/HomePage/reducer'
import rooms from '../components/Rooms/reducer'

const reactApp = combineReducers({
  homePage,
  rooms
})

export default reactApp
