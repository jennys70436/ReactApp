import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms } from '../actions'
import _ from 'lodash'

export function useRoomDetail (id) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const actionCreaters = bindActionCreators({ getRooms }, dispatch)

  const roomList = state.rooms.roomList
  const roomData = _.find(roomList, { id }) || {}
  
  useEffect(() => {

  }, [])

  return {
    roomData
  }
}
