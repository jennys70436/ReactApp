import React from 'react'

const TitleBar = (props) => {
  return (
    <div className='hero-wrap bg1'>
        <div className='overlay'></div>
        <div className='container'>
            <div className='row no-gutters slider-text d-flex align-itemd-end justify-content-center'>
                <div className='col-md-9 text-center d-flex align-items-end justify-content-center'>
                    <div className='text'>
                        <h1 className='mb-4 bread'>{props.moduleName}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TitleBar
