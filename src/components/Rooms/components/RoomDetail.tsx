import React from 'react'
import { useRoomDetail } from '../hook/roomDetail'

const RoomDetail = (props) => {
  const { id } = props.match.params
  const { roomData } = useRoomDetail(id)
  console.log(roomData)
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
                          <div className='col-sm col-md-6'>
                                    <div className='room'>
                                        <a href='rooms.html' className='img img-2 d-flex justify-content-center align-items-center'>
                                            <div className='icon d-flex justify-content-center align-items-center'>
                                                <span className='icon-search2'></span>
                                            </div>
                                        </a>
                                        <div className='text p-3 text-center'>
                                            <h3 className='mb-3'><a href='rooms.html'>Suite Room</a></h3>
                                            <p><span className='price mr-2'>$120.00</span> <span className='per'>per night</span></p>
                                            <hr />
                                            <p className='pt-1'><a href='room-single.html' className='btn-custom'>View Room Details <span className='icon-long-arrow-right'></span></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm col-md-6'>
                                    <div className='room'>
                                        <a href='rooms.html' className='img img-2 d-flex justify-content-center align-items-center'>
                                            <div className='icon d-flex justify-content-center align-items-center'>
                                                <span className='icon-search2'></span>
                                            </div>
                                        </a>
                                        <div className='text p-3 text-center'>
                                            <h3 className='mb-3'><a href='rooms.html'>Family Room</a></h3>
                                            <p><span className='price mr-2'>$20.00</span> <span className='per'>per night</span></p>
                                            <hr />
                                            <p className='pt-1'><a href='room-single.html' className='btn-custom'>View Room Details <span className='icon-long-arrow-right'></span></a></p>
                                        </div>
                                    </div>
                                </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='col-lg-4 sidebar'>
            <div className='sidebar-box'>
              <h3>Recent Blog</h3>
              <div className='block-21 mb-4 d-flex'>
                <a className='blog-img mr-4 blog-img1'></a>
                <div className='text'>
                  <h3 className='heading'><a href='#'>Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className='meta'>
                    <div><a href='#'><span className='icon-calendar'></span> July 12, 2018</a></div>
                    <div><a href='#'><span className='icon-person'></span> Admin</a></div>
                    <div><a href='#'><span className='icon-chat'></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div className='block-21 mb-4 d-flex'>
                <a className='blog-img mr-4 blog-img2'></a>
                <div className='text'>
                  <h3 className='heading'><a href='#'>Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className='meta'>
                    <div><a href='#'><span className='icon-calendar'></span> July 12, 2018</a></div>
                    <div><a href='#'><span className='icon-person'></span> Admin</a></div>
                    <div><a href='#'><span className='icon-chat'></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div className='block-21 mb-4 d-flex'>
                <a className='blog-img mr-4 blog-img3'></a>
                <div className='text'>
                  <h3 className='heading'><a href='#'>Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className='meta'>
                    <div><a href='#'><span className='icon-calendar'></span> July 12, 2018</a></div>
                    <div><a href='#'><span className='icon-person'></span> Admin</a></div>
                    <div><a href='#'><span className='icon-chat'></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='sidebar-box'>
              <h3>Tag Cloud</h3>
              <div className='tagcloud'>
                <a href='#' className='tag-cloud-link'>dish</a>
                <a href='#' className='tag-cloud-link'>menu</a>
                <a href='#' className='tag-cloud-link'>food</a>
                <a href='#' className='tag-cloud-link'>sweet</a>
                <a href='#' className='tag-cloud-link'>tasty</a>
                <a href='#' className='tag-cloud-link'>delicious</a>
                <a href='#' className='tag-cloud-link'>desserts</a>
                <a href='#' className='tag-cloud-link'>drinks</a>
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
