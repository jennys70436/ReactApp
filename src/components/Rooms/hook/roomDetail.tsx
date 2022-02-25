import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Room } from '../reducer'
import { ReactAppState } from '../../../reducers'
import _ from 'lodash'

export function useRoomDetail (id: string):{
  roomData: Room
} {
  const state = useSelector((state: ReactAppState) => state)

  const roomList = state.rooms.roomList
  const roomData = _.find(roomList, { id }) as Room

  useEffect(() => {

  }, [])

  return {
    roomData
  }
}
