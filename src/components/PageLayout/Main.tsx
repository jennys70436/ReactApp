import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = (props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light' id='ftco-navbar'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>Deluxe</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#ftco-nav' aria-controls='ftco-nav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='oi oi-menu'></span> Menu
          </button>
          <div className='collapse navbar-collapse' id='ftco-nav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'><NavLink className='nav-link' activeClassName='active' to='/homePage'>Home</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' activeClassName='active' to='/rooms/list'>Rooms</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
      <footer className='ftco-footer ftco-bg-dark ftco-section'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-md'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>Deluxe Hotel</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-5'>
                  <li className='ftco-animate'><a href='#'><span className='icon-twitter'></span></a></li>
                  <li className='ftco-animate'><a href='#'><span className='icon-facebook'></span></a></li>
                  <li className='ftco-animate'><a href='#'><span className='icon-instagram'></span></a></li>
                </ul>
              </div>
            </div>
            <div className='col-md'>
              <div className='ftco-footer-widget mb-4 ml-md-5'>
                <h2 className='ftco-heading-2'>Useful Links</h2>
                <ul className='list-unstyled'>
                  <li><a href='#' className='py-2 d-block'>Blog</a></li>
                  <li><a href='#' className='py-2 d-block'>Rooms</a></li>
                  <li><a href='#' className='py-2 d-block'>Amenities</a></li>
                  <li><a href='#' className='py-2 d-block'>Gift Card</a></li>
                </ul>
              </div>
            </div>
            <div className='col-md'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>Privacy</h2>
                <ul className='list-unstyled'>
                  <li><a href='#' className='py-2 d-block'>Career</a></li>
                  <li><a href='#' className='py-2 d-block'>About Us</a></li>
                  <li><a href='#' className='py-2 d-block'>Contact Us</a></li>
                  <li><a href='#' className='py-2 d-block'>Services</a></li>
                </ul>
              </div>
            </div>
            <div className='col-md'>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='ftco-heading-2'>Have a Questions?</h2>
                <div className='block-23 mb-3'>
                  <ul>
                    <li><span className='icon icon-map-marker'></span><span className='text'>203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href='#'><span className='icon icon-phone'></span><span className='text'>+2 392 3929 210</span></a></li>
                    <li><a href='#'><span className='icon icon-envelope'></span><span className='text'>info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className='icon-heart color-danger' aria-hidden='true'></i> by <a href='https://colorlib.com' target='_blank'>Colorlib</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Main
