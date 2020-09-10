import React from 'react'
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
    buttonClasses="Button buttonClasses-0 buttonClasses-1 mx-auto"
    declineButtonClasses="Button buttonClasses-0 buttonClasses-2 mx-auto"
    cookieName="openCookie"
    style={{
      fontFamily: 'var(--font-primary)'
    }}
  >
    <Fade>
      <div className="section">
        <div className="my-auto AgeGate--Section col-lg-12">
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
            <div className="my-auto col-lg-7">
              <br />
              <h2>YOU MUST BE LEGAL AGE TO ENTER THIS SITE</h2>
            </div>
            <div className="my-auto col-lg-5">
              <img
                src="../images/svg/barcode.svg"
                alt="Bakked Extracts"
                className="img-fluid my-auto"
              />
            </div>
          </div>
          <div className="AgeGate--Input container row">
            <div className="col-lg-2">
              <img
                src="../images/svg/crash-test.svg"
                alt="Bakked Extracts"
                className="img-fluid my-auto"
                width="100px"
              />
            </div>
          </div>
          <div className="row container">
            <div className="col-lg-12 text-center my-auto AgeGate--Copy">
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
