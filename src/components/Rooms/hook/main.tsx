import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms, setCategory } from '../actions'

export function useMain (): void {
  const dispatch = useDispatch()
  const actionCreaters = bindActionCreators({ getRooms, setCategory }, dispatch)

  useEffect(() => {
    actionCreaters.getRooms()
  }, [])
}
