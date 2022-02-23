import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms } from '../actions'

export function useRoomList () {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const actionCreaters = bindActionCreators({ getRooms }, dispatch)

  const roomList = state.rooms.roomList

  useEffect(() => {
    actionCreaters.getRooms()
  }, [])

  return {
    roomList
  }
}
