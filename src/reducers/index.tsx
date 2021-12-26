import { combineReducers } from 'redux'
import login from '../components/Login/reducer'
import page1 from '../components/Page1/reducer'

const reactApp = combineReducers({
  login,
  page1
})

export default reactApp
