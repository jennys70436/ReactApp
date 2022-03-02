import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ReactAppState } from '../../../reducers'
import { setDate, book } from '../actions'
import _ from 'lodash'
import { Room } from '../reducer'

export function useRoomDetail (id: string):{
  startDate: Date
  endDate: Date
  roomData: Room
  sameSizeRooms: Room[]
  setDate: (type: string, date: Date) => void
  book: (name: string) => void
} {
  const state = useSelector((state: ReactAppState) => state)
  const dispatch = useDispatch()
  const actionCreaters = bindActionCreators({ setDate, book }, dispatch)

  const { roomList, startDate, endDate } = state.rooms
  const roomData = _.isEmpty(roomList)
    ? {} as Room
    : _.find(roomList, { id }) as Room
  const roomSize = roomData.size
  const sameSizeRooms = _.filter(roomList, { size: roomSize })

  return {
    startDate,
    endDate,
    roomData,
    sameSizeRooms,
    ...actionCreaters
  }
}
