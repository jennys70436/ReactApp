import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { init } from '../actions'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(init()))
  return (
    <h1 className='title'>Page1</h1>
  )
}

export default Main
