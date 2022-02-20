import React from 'react'

const RoomCard = (props) => {
  return (
        <div className='col-sm col-md-6 col-lg-4'>
          <div className='room'>
            <a className={`img d-flex justify-content-center align-items-center ${props.data.cardImg}`}>
            </a>
            <div className='text p-3 text-center'>
              <h3 className='mb-3'><a href='rooms-single.html'>{props.data.name}</a></h3>
              <p><span className='price mr-2'>${props.data.price}</span> <span className='per'>per night</span></p>
              <ul className='list'>
                <li><span>Max:</span>{props.data.size} Persons</li>
                <li><span>Bed:</span>{props.data.bed}</li>
              </ul>
              <hr />
                <p className='pt-1'><a href='room-single.html' className='btn-custom'>Book Now <span className='icon-long-arrow-right'></span></a></p>
            </div>
          </div>
        </div>
  )
}
export default RoomCard
