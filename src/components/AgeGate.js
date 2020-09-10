import React from 'react'
import { Link } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import CookieConsent from 'react-cookie-consent'

import './AgeGate.css'
import './globalStyles.scss'

export default () => (
  <CookieConsent
    buttonText="ACCEPT"
    enableDeclineButton
    declineButtonText="EXIT"
    containerClasses="my-auto"
    contentClasses="popup-backdrop mx-auto"
    buttonClasses="btn buttonClasses-0 buttonClasses-1 mx-auto"
    declineButtonClasses="btn buttonClasses-0 buttonClasses-2 mx-auto"
    cookieName="openCookie"
    style={{
      fontFamily: 'var(--font-primary)',
    }}
  >
    <Fade>
      <div className="section my-auto">
        <div className="my-auto col-lg-12">
          <div className="AgeGate--Logo row container">
            <div className="ml-auto my-auto col-lg-8">
              <br />
              <img
                src="../images/logo-b.svg"
                alt="Bakked Extracts"
                className="img-fluid my-auto"
                width="300px"
              />
            </div>
            <div className="col-lg-4">
              <img
                src="../images/photos/stickers/fully-activated-high-thc-cannabis.png"
                alt="Bakked Extracts"
                className="img-fluid AgeGate--Sticker"
                width="300px"
              />
            </div>
          </div>
          <div className="row container AgeGate--Copy">
            <div className="my-auto col-lg-5">
              <br />
              <h3>YOU MUST BE LEGAL AGE TO ENTER THIS SITE</h3>
              <p>
                BY CONTINUING TO USE THIS SITE YOU ACKNOWLEDGE OUR PRIVACY
                POLICY AND USE OF COOKIES.
              </p>
            </div>
            <div className="my-auto col-lg-6">
              <img
                src="https://i.dlpng.com/static/png/6632827_preview.png"
                alt="Bakked Extracts"
                className="img-fluid my-auto"
              />
            </div>
          </div>
          <div className="AgeGate--Input container row">
            <div className="col-lg-3 my-auto">
              <p>Please enter your&nbsp;birthday.</p>
            </div>
            <div className="col-lg-6 my-auto">
              <label className="Form--Label">
                <input
                  className="Age--Input"
                  type="email"
                  placeholder="DD/MM/YY"
                  name="birthday"
                  required
                />
                <span>DD/MM/YY</span>
              </label>
            </div>
            <div className="col-lg-2">
              <img
                src="../images/svg/crash-test.svg"
                alt="Bakked Extracts"
                className="img-fluid my-auto"
                width="100px"
              />
              <div className="py-2">
                <Link to="/privacy/" className="Button p-2 mx-auto text-center">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="row container">
            <div className="col-lg-6 AgeGate--Copy">
              <br />

              <p>
                BY CONTINUING TO USE THIS SITE YOU ACKNOWLEDGE OUR PRIVACY
                POLICY AND USE OF COOKIES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </CookieConsent>
)
