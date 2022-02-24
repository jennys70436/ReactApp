import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms } from '../actions'
import { Room } from '../reducer'
import { ReactAppState } from '../../../reducers'

export function useRoomList (): {
  roomList: Room[]
  } {
  const dispatch = useDispatch()
  const state = useSelector((state: ReactAppState) => state)
  const actionCreaters = bindActionCreators({ getRooms }, dispatch)

  const roomList = state.rooms.roomList

  useEffect(() => {
    actionCreaters.getRooms()
  }, [])

  return {
    roomList
  }
}
