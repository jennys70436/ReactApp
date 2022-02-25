import React from 'react'
import TitleBar from '../../PageLayout/TitleBar'
import { moduleName, route } from '../config'
import { Route } from 'react-router-dom'
import RoomList from './RoomList'
import RoomDetail from './RoomDetail'
const Main = () => {
  return (
    <div id={moduleName}>
      <TitleBar moduleName={moduleName}/>
      <Route path={`${route.path}/list`} component={RoomList} />
      <Route path={`${route.path}/detail/:id`} component={RoomDetail} />
    </div>
  )
}

export default Main
