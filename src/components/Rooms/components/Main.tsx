import React from 'react'
import { useRoomList } from '../hook/roomList'
import TitleBar from '../../PageLayout/TitleBar'
import { moduleName, route } from '../config'
import RoomCard from './RoomCard'
import _ from 'lodash'
import { Route } from 'react-router-dom'
import RoomList from './RoomList'
import RoomDetail from './RoomDetail'
const Main = () => {
  // const { roomList } = useRoomList()
  return (
    <div id={moduleName}>
      <TitleBar moduleName={moduleName}/>
      <Route path={`${route.path}/list`} component={RoomList} />
      <Route path={`${route.path}/detail/:id`} component={RoomDetail} />
    </div>
  )
}

export default Main
