import React from 'react'
import { useRoomList } from '../hook/roomList'
import RoomCard from './RoomCard'
import _ from 'lodash'

const RoomList = () => {
  const { roomList } = useRoomList()
  return (
    <section className='ftco-section bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              {
                _.map(roomList, room => <RoomCard data={room} key={room.id} />)
              }
            </div>
          </div>
          <div className='col-lg-3 sidebar'>
            <div className='sidebar-wrap bg-light'>
              <h3 className='heading mb-4'>Advanced Search</h3>
              <form action='#'>
                <div className='fields'>
                  <div className='form-group'>
                    <input type='text' id='checkin_date' className='form-control checkin_date' placeholder='Check In Date' />
                  </div>
                  <div className='form-group'>
                    <input type='text' id='checkin_date' className='form-control checkout_date' placeholder='Check Out Date' />
                  </div>
                  <div className='form-group'>
                    <div className='select-wrap one-third'>
                      <div className='icon'><span className='ion-ios-arrow-down'></span></div>
                      <select name='' id='' className='form-control'>
                        <option value=''>Room Type</option>
                        <option value=''>Suite</option>
                        <option value=''>Family Room</option>
                        <option value=''>Deluxe Room</option>
                        <option value=''>Classic Room</option>
                        <option value=''>Superior Room</option>
                        <option value=''>Luxury Room</option>
                      </select>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='select-wrap one-third'>
                      <div className='icon'><span className='ion-ios-arrow-down'></span></div>
                      <select name='' id='' className='form-control'>
                        <option value=''>0 Adult</option>
                        <option value=''>1 Adult</option>
                        <option value=''>2 Adult</option>
                        <option value=''>3 Adult</option>
                        <option value=''>4 Adult</option>
                        <option value=''>5 Adult</option>
                        <option value=''>6 Adult</option>
                      </select>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='select-wrap one-third'>
                      <div className='icon'><span className='ion-ios-arrow-down'></span></div>
                      <select name='' id='' className='form-control'>
                        <option value=''>0 Children</option>
                        <option value=''>1 Children</option>
                        <option value=''>2 Children</option>
                        <option value=''>3 Children</option>
                        <option value=''>4 Children</option>
                        <option value=''>5 Children</option>
                        <option value=''>6 Children</option>
                      </select>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='range-slider'>
                      <span>
                        <input type='number' min='0' max='120000' />  -
                        <input type='number' min='0' max='120000' />
                      </span>
                      <input min='0' max='120000' step='500' type='range' />
                      <input min='0' max='120000' step='500' type='range' />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <input type='submit' value='Search' className='btn btn-primary py-3 px-5' />
                </div>
              </form>
            </div>
            <div className='sidebar-wrap bg-light'>
              <div className='categories'>
                <h3>Categories</h3>
                <li>所有房型 <span>(12)</span></li>
                <li>雙人房 <span>(22)</span></li>
                <li>四人房 <span>(37)</span></li>
                <li>六人房 <span>(42)</span></li>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default RoomList
