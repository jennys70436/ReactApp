import React from 'react'
import { route } from '../config'
import { Link } from 'react-router-dom'

const RoomCard = (props) => {
  return (
        <div className='col-sm col-md-6 col-lg-4'>
          <div className='room'>
            <a className={`img d-flex justify-content-center align-items-center ${props.data.cardImg}`}>
            </a>
            <div className='text p-3 text-center'>
              <h3 className='mb-3'>{props.data.name}</h3>
              <p><span className='price mr-2'>${props.data.price}</span> <span className='per'>per night</span></p>
              <ul className='list'>
                <li><span>Max:</span>{props.data.size} Persons</li>
                <li><span>Bed:</span>{props.data.bed}</li>
              </ul>
              <hr />
                <p className='pt-1'><Link to={`${route.path}/detail/${props.data.id}`} className='btn-custom'>Book Now<span className='icon-long-arrow-right' /></Link></p>
            </div>
          </div>
        </div>
  )
}
export default RoomCard
