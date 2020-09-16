import React from 'react'
import { Link } from 'gatsby'
import Image from './Image'

import './ExtractTypes.css'

const ExtractTypes = ({
  liveResin,
  liveResinSticker,
  liveResinTitle,
  highTerpExtract,
  highTerpSticker,
  highTerpTitle,
  className = ''
}) => {
  return (
    <section className="ExtractTypes bg-dusty">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="ExtractTypes--Title">Extract Types</h2>
        <div className="container row">
          <div className="col-lg-6 py-3">
            {liveResin && (
              <div className="relative">
                <Image
                  src={liveResin}
                  alt="REPLACE"
                  className="img-fluid Item--Petri"
                />
              </div>
            )}
            <div className="FeatureArray--Sticker--Container">
              <Image
                resolutions="small"
                src={liveResinSticker}
                alt="REPLACE"
                className="img-fluid FeatureArray--Sticker"
              />
            </div>
            <p>{liveResinTitle}</p>
          </div>
          <div className="col-lg-6 py-3">
            {highTerpExtract && (
              <div className="relative">
                <Image
                  src={highTerpExtract}
                  alt="Lorem Ipsum"
                  className="img-fluid Item--Petri"
                />
              </div>
            )}
            <div className="FeatureArray--Sticker--Container">
              <Image
                resolutions="small"
                src={highTerpSticker}
                alt="REPLACE"
                className="img-fluid FeatureArray--Sticker"
              />
            </div>
            <p>{highTerpTitle}</p>
          </div>
        </div>
        <div className="container py-4">
          <p>TESTING IN SESSION: DIAMONDS, ROSIN &amp; LIVE BUDDER</p>
          <Link to="/products" className="Button mx-auto text-center">
            Explore Oil Types
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ExtractTypes
