import React from 'react'
import { useRoomList } from '../hook/roomList'
import RoomCard from './RoomCard'
import _ from 'lodash'

const RoomList = () => {
  const { roomList, filterRoomList, setCategory } = useRoomList()
  return (
    <section className='ftco-section bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              {
                _.map(filterRoomList, room => <RoomCard data={room} key={room.id} />)
              }
            </div>
          </div>
          <div className='col-lg-3 sidebar'>
            <div className='sidebar-wrap bg-light'>
              <div className='categories'>
                <h3>Categories</h3>
                <li onClick={() => setCategory('all')}>所有房型 <span>({roomList.length})</span></li>
                <li onClick={() => setCategory('2')}>雙人房 <span>({_.filter(roomList, { size: '2' }).length})</span></li>
                <li onClick={() => setCategory('4')}>四人房 <span>({_.filter(roomList, { size: '4' }).length})</span></li>
                <li onClick={() => setCategory('6')}>六人房 <span>({_.filter(roomList, { size: '6' }).length})</span></li>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default RoomList
