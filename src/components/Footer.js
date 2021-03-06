import React from 'react'
import { Link } from 'gatsby'
import { Instagram, Facebook, MessageCircle } from 'react-feather'

import FormMini from './FormMini'
import './Footer.css'

export default () => (
  <div className="footer--stripes--container taCenter">
    <div className="container">
      <div className="footerNav">
        <div className="footerNavBorder">
          <div className="row brandLogo">
            <div className="col-lg-4">
              <img
                src="../images/logos/bakked_logo.png"
                alt="Bakked"
                className="img-fluid"
              />
              <div className="d-block d-md-none d-lg-none mx-auto text-center footer-credits">
                <li>
                  <Instagram />
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <MessageCircle />
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center-sm">
              <h4>Subscribe</h4>
              <FormMini />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="col-lg-12 mx-auto text-center-sm">
                <h4>Explore</h4>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <li>
                      <Link to="/gyro/">Gyro</Link>
                    </li>

                    <li>
                      <Link to="/dabaratus/">Dabaratus</Link>
                    </li>
                    <li>How It's Made</li>
                    <li>
                      <a
                        href="https://loilpoints.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        loilpoints
                      </a>
                    </li>
                  </div>
                  <div className="col-lg-6 col-12">
                    <li>
                      <Link to="/retailer/">Find A Retailer</Link>
                    </li>
                    <li>
                      <Link to="/contact/">Support</Link>
                    </li>
                    <li>
                      <Link to="/contact/">FAQ</Link>
                    </li>
                    <li>
                      <a
                        href="https://slangww.com/promise/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Slang Promise
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 footer-credits pt-3">
                <p>
                  Order now in CA CO &amp; OR
                  <img
                    src="../images/logos/leaflink.svg"
                    alt="Leaflink"
                    className="img-fluid my-auto"
                    width="120px"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row">
          <div className="col-lg-6 footer-credits py-3">
            <li>
              <Link to="/privacy/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/privacy/">Web Accessibility</Link>
            </li>
            <li>
              <span>&copy; {new Date().getFullYear()} Bakked.</span>
            </li>
          </div>
          <div className="col-lg-6 footer-credits">
            <li>
              <Instagram />
            </li>
            <li>
              <Link to="/contact/">
                <MessageCircle />
              </Link>
            </li>
            <li>
              <img
                src="../images/logos/slang.svg"
                className="img-fluid"
                width="100px"
                alt="Slang Worldwide"
              />
            </li>
          </div>
        </div>
      </footer>
    </div>
    <div className="pt-5 footer--stripes"></div>
  </div>
)
