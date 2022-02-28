import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms, setCategory } from '../actions'
import { Room } from '../reducer'
import { ReactAppState } from '../../../reducers'
import _ from 'lodash'

export function useRoomList (): {
  roomList: Room[]
  filterRoomList: Room[]
  category: string
  setCategory: (category: string) => void
  } {
  const dispatch = useDispatch()
  const state = useSelector((state: ReactAppState) => state)
  const actionCreaters = bindActionCreators({ getRooms, setCategory }, dispatch)

  const roomList = state.rooms.roomList
  const category = state.rooms.category
  const filterRoomList = category === 'all'
    ? roomList
    : _.filter(roomList, { size: category })

  return {
    roomList,
    filterRoomList,
    category,
    ...actionCreaters
  }
}
