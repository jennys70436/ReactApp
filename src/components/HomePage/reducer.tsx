import * as ACTION_TYPES from './actionTypes'
import { AnyAction } from 'redux'

interface HomePageState {
  login: boolean
}

const initialState: HomePageState = {
  login: false
}

function homePage (state = initialState, action: AnyAction): HomePageState {
  switch (action.type) {
    case ACTION_TYPES.INIT:
      return {
        ...state,
        login: true
      }
    default:
      return state
  }
}

export default homePage
