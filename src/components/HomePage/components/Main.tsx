import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { init } from '../actions'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(init()))
  return (
    <>
      <section className='ftco-section ftc-no-pb ftc-no-pt'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center bg2' />
            <div className='col-md-7 py-5 wrap-about pb-md-5'>
              <div className='heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5'>
                <div className='ml-md-0'>
                  <span className='subheading'>Welcome to Deluxe Hotel</span>
                  <h2 className='mb-4'>Welcome To Our Hotel</h2>
                </div>
              </div>
              <div className='pb-md-5'>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word 'and' and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
