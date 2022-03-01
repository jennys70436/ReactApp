import React, { useState } from 'react'
import { useRoomDetail } from '../hook/roomDetail'
import RoomCard from './RoomCard'
import _ from 'lodash'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface RoomDetailProps {
  match: { params: { id: string } }
}

const RoomDetail = (props: RoomDetailProps) => {
  const { id } = props.match.params
  const { startDate, endDate, roomData, sameSizeRooms, setDate, book } = useRoomDetail(id)
  return (
    <section className='ftco-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
              <div className='row'>
                  <div className='col-md-12'>
                      <h2 className='mb-4'>{roomData.name}</h2>
                      <div className={`${roomData.detailImg}`}>
                          <div className='item'>
                              <div className='room-img'></div>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-12 room-single mt-4 mb-5'>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                            <div className='d-md-flex mt-5 mb-5'>
                                <ul className='list'>
                                    <li><span>Max:</span> {roomData.size} Persons</li>
                                </ul>
                                <ul className='list ml-md-5'>
                                    <li><span>Bed:</span> {roomData.bed}</li>
                                </ul>
                                <ul className='list ml-md-5'>
                                    <li><span>Price:</span> ${roomData.price}</li>
                                </ul>
                            </div>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                  </div>
                  <div className='col-md-12 room-single mb-5 mt-5'>
                      <h4 className='mb-4'>Available Room</h4>
                      <div className='row'>
                      {
                        _.map(sameSizeRooms, room => <RoomCard data={room} key={room.id} />)
                      }
                      </div>
                  </div>
              </div>
          </div>
          <div className='col-lg-4 sidebar'>
          <div className='sidebar-wrap bg-light'>
              <h3 className='heading mb-4'>Booking Time</h3>
                <div className='fields'>
                  <div className='form-group'>
                    <DatePicker
                      selected={startDate}
                      onChange={(date:Date) => setDate('startDate', date)}
                      className='form-control checkin_date'
                      dateFormat="yyyy/MM/dd"
                      placeholderText='Check In Date'
                    />
                  </div>
                  <div className='form-group'>
                    <DatePicker
                      selected={endDate}
                      onChange={(date:Date) => setDate('endDate', date)}
                      className='form-control checkout_date'
                      dateFormat="yyyy/MM/dd"
                      placeholderText='Check Out Date'
                    />
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-primary py-3 px-5' onClick={() => book()}>Book</button>
                  </div>
                </div>
            </div>
            <div className='sidebar-box'>
              <h3>Recent Blog</h3>
              <div className='block-21 mb-4 d-flex'>
                <a className='blog-img mr-4 blog-img1'></a>
                <div className='text'>
                  <h3 className='heading'><a>Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className='meta'>
                    <div><a><span className='icon-calendar'></span> July 12, 2018</a></div>
                    <div><a><span className='icon-person'></span> Admin</a></div>
                    <div><a><span className='icon-chat'></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div className='block-21 mb-4 d-flex'>
                <a className='blog-img mr-4 blog-img2'></a>
                <div className='text'>
                  <h3 className='heading'><a>Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className='meta'>
                    <div><a><span className='icon-calendar'></span> July 12, 2018</a></div>
                    <div><a><span className='icon-person'></span> Admin</a></div>
                    <div><a><span className='icon-chat'></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div className='block-21 mb-4 d-flex'>
                <a className='blog-img mr-4 blog-img3'></a>
                <div className='text'>
                  <h3 className='heading'><a>Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className='meta'>
                    <div><a><span className='icon-calendar'></span> July 12, 2018</a></div>
                    <div><a><span className='icon-person'></span> Admin</a></div>
                    <div><a><span className='icon-chat'></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='sidebar-box'>
              <h3>Tag Cloud</h3>
              <div className='tagcloud'>
                <a className='tag-cloud-link'>dish</a>
                <a className='tag-cloud-link'>menu</a>
                <a className='tag-cloud-link'>food</a>
                <a className='tag-cloud-link'>sweet</a>
                <a className='tag-cloud-link'>tasty</a>
                <a className='tag-cloud-link'>delicious</a>
                <a className='tag-cloud-link'>desserts</a>
                <a className='tag-cloud-link'>drinks</a>
              </div>
            </div>
            <div className='sidebar-box'>
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetail
