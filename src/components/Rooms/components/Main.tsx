import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { init } from '../actions'
import TitleBar from '../../PageLayout/TitleBar'
import { moduleName } from '../config'
import RoomCard from './RoomCard'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(init()))
  return (
    <div id={moduleName}>
      <TitleBar moduleName={moduleName}/>
      <section className='ftco-section bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='row'>
                <div className='col-sm col-md-6 col-lg-4'>
                  <div className='room'>
                    {/* <a href='rooms-single.html' className='img d-flex justify-content-center align-items-center' style='background-image: url(images/room-1.jpg);'>
                      <div className='icon d-flex justify-content-center align-items-center'>
                        <span className='icon-search2'></span>
                      </div>
                    </a> */}
                    <div className='text p-3 text-center'>
                      <h3 className='mb-3'><a href='rooms-single.html'>Suite Room</a></h3>
                      <p><span className='price mr-2'>$120.00</span> <span className='per'>per night</span></p>
                      <ul className='list'>
                        <li><span>Max:</span> 3 Persons</li>
                        <li><span>Size:</span> 45 m2</li>
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 1</li>
                      </ul>
                      <hr />
                        <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
                    </div>
                  </div>
                </div>
                <div className='col-sm col-md-6 col-lg-4'>
                  <div className='room'>
                    {/* <a href='rooms-single.html' className='img d-flex justify-content-center align-items-center' style='background-image: url(images/room-2.jpg);'>
                      <div className='icon d-flex justify-content-center align-items-center'>
                        <span className='icon-search2'></span>
                      </div>
                    </a> */}
                    <div className='text p-3 text-center'>
                      <h3 className='mb-3'><a href='rooms-single.html'>Family Room</a></h3>
                      <p><span className='price mr-2'>$20.00</span> <span className='per'>per night</span></p>
                      <ul className='list'>
                        <li><span>Max:</span> 3 Persons</li>
                        <li><span>Size:</span> 45 m2</li>
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 1</li>
                      </ul>
                      <hr />
                        <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
                    </div>
                  </div>
                </div>
                <div className='col-sm col-md-6 col-lg-4'>
                  <div className='room'>
                    {/* <a href='rooms-single.html' className='img d-flex justify-content-center align-items-center' style='background-image: url(images/room-3.jpg);'>
                      <div className='icon d-flex justify-content-center align-items-center'>
                        <span className='icon-search2'></span>
                      </div>
                    </a> */}
                    <div className='text p-3 text-center'>
                      <h3 className='mb-3'><a href='rooms-single.html'>Deluxe Room</a></h3>
                      <p><span className='price mr-2'>$150.00</span> <span className='per'>per night</span></p>
                      <ul className='list'>
                        <li><span>Max:</span> 5 Persons</li>
                        <li><span>Size:</span> 45 m2</li>
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 2</li>
                      </ul>
                      <hr />
                        <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
                    </div>
                  </div>
                </div>
                <div className='col-sm col-md-6 col-lg-4'>
                  <div className='room'>
                    {/* <a href='rooms-single.html' className='img d-flex justify-content-center align-items-center' style='background-image: url(images/room-4.jpg);'>
                      <div className='icon d-flex justify-content-center align-items-center'>
                        <span className='icon-search2'></span>
                      </div>
                    </a> */}
                    <div className='text p-3 text-center'>
                      <h3 className='mb-3'><a href='rooms-single.html'>Classic Room</a></h3>
                      <p><span className='price mr-2'>$130.00</span> <span className='per'>per night</span></p>
                      <ul className='list'>
                        <li><span>Max:</span> 5 Persons</li>
                        <li><span>Size:</span> 45 m2</li>
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 2</li>
                      </ul>
                      <hr />
                        <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
                    </div>
                  </div>
                </div>
                <div className='col-sm col-md-6 col-lg-4'>
                  <div className='room'>
                    {/* <a href='rooms-single.html' className='img d-flex justify-content-center align-items-center' style='background-image: url(images/room-5.jpg);'>
                      <div className='icon d-flex justify-content-center align-items-center'>
                        <span className='icon-search2'></span>
                      </div>
                    </a> */}
                    <div className='text p-3 text-center'>
                      <h3 className='mb-3'><a href='rooms-single.html'>Superior Room</a></h3>
                      <p><span className='price mr-2'>$300.00</span> <span className='per'>per night</span></p>
                      <ul className='list'>
                        <li><span>Max:</span> 6 Persons</li>
                        <li><span>Size:</span> 45 m2</li>
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 3</li>
                      </ul>
                      <hr />
                        <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
                    </div>
                  </div>
                </div>
                <div className='col-sm col-md-6 col-lg-4'>
                  <div className='room'>
                    {/* <a href='rooms-single.html' className='img d-flex justify-content-center align-items-center' style='background-image: url(images/room-6.jpg);'>
                      <div className='icon d-flex justify-content-center align-items-center'>
                        <span className='icon-search2'></span>
                      </div>
                    </a> */}
                    <div className='text p-3 text-center'>
                      <h3 className='mb-3'><a href='rooms-single.html'>Luxury Room</a></h3>
                      <p><span className='price mr-2'>$500.00</span> <span className='per'>per night</span></p>
                      <ul className='list'>
                        <li><span>Max:</span> 5 Persons</li>
                        <li><span>Size:</span> 45 m2</li>
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 2</li>
                      </ul>
                      <hr />
                        <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
                    </div>
                  </div>
                </div>
                <RoomCard />
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
                <h3 className='heading mb-4'>Star Rating</h3>
                <form method='post' className='star-rating'>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                      <label className='form-check-label'>
                        <p className='rate'><span><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star'></i></span></p>
                      </label>
                  </div>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                      <label className='form-check-label'>
                        <p className='rate'><span><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star-o'></i></span></p>
                      </label>
                  </div>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                      <label className='form-check-label'>
                        <p className='rate'><span><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star-o'></i><i className='icon-star-o'></i></span></p>
                      </label>
                  </div>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                      <label className='form-check-label'>
                        <p className='rate'><span><i className='icon-star'></i><i className='icon-star'></i><i className='icon-star-o'></i><i className='icon-star-o'></i><i className='icon-star-o'></i></span></p>
                      </label>
                  </div>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                      <label className='form-check-label'>
                        <p className='rate'><span><i className='icon-star'></i><i className='icon-star-o'></i><i className='icon-star-o'></i><i className='icon-star-o'></i><i className='icon-star-o'></i></span></p>
                      </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div>
  )
}

export default Main
