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
            <div className="col-lg-3 col-12 text-center-sm">
              <h4>Subscribe</h4>
              <FormMini />
            </div>
            <div className="col-lg-5 col-12">
              <div className="col-lg-12 mx-auto text-center-sm">
                <h4>Explore</h4>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <li>
                      <Link to="/gyro/">Gyro</Link>
                    </li>

                    <li>
                      <Link to="/products/">Dabaratus</Link>
                    </li>
                    <li>
                      <Link to="/about/">How It's Made</Link>
                    </li>
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
                      <Link to="/about/">Find A Retailer</Link>
                    </li>
                    <li>
                      <Link to="/about/">Support</Link>
                    </li>
                    <li>
                      <Link to="/about/">FAQ</Link>
                    </li>
                    <li>
                      <a
                        href="https://slangww.com"
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
          <div className="col-lg-6 footer-credits">
            <li>
              <Link to="/privacy">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link>Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <span>© {new Date().getFullYear()} Bakked.</span>
            </li>
          </div>
          <div className="col-lg-6 footer-credits">
            <li>
              <Instagram />
            </li>
            <li>
              <Facebook />
            </li>
            <li>
              <MessageCircle />
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
