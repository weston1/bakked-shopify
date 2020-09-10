import React from 'react'
import Ticker from 'react-ticker'

import './BakkedMarquee.css'

const BakkedMarquee = () => (
  <section className="Marquee-Container">
    <Ticker>
      {() => (
        <div className="Marquee-Inner my-auto">
          <h1>
            <img
              src="../images/svg/crash-test.svg"
              alt="BAKKED EXTRACTS CANNABIS TESTING"
            />{' '}
            LET'S #GET BAKKED
          </h1>
        </div>
      )}
    </Ticker>
  </section>
)

export default BakkedMarquee
