import React from 'react'
import Ticker from 'react-ticker'

import './BakkedMarquee.css'

const BakkedMarquee = () => (
  <section className="BakkedMarquee">
    <Ticker speed={5} className="BakkedMarquee--Inner">
      {() => (
        <>
          <div className="my-auto BakkedMarquee--Motion">
            <h1>
              {' '}
              <img
                src="../images/svg/crash-test.svg"
                alt="BAKKED EXTRACTS CANNABIS TESTING"
                className="BakkedMarquee--Icon"
              />
              LET'S #GET BAKKED
            </h1>
          </div>
          <div className="section blend--bg"></div>
        </>
      )}
    </Ticker>
  </section>
)

export default BakkedMarquee
