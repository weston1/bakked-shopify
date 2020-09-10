import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Content from './Content'
import Image from './Image'

const ExtractTypes = ({ bakkedImg3, className = '' }) => {
  return (
    <section className="ExtractTypes">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="ExtractTypes--Title">Extract Types</h2>
        <div className="container">
          <div className="col-lg-6">
            {bakkedImg3 && (
              <div className="PostCard--Image relative">
                <Image
                  src={bakkedImg3}
                  alt="Lorem Ipsum"
                  className="img-fluid"
                />
              </div>
            )}
          </div>
          <div className="col-lg-6"></div>
        </div>
        <p>TESTING IN SESSION: DIAMONDS, ROSIN &amp; LIVE BUDDER</p>
        <Link to="/products" className="Button mx-auto text-center">
          Explore Oil Types
        </Link>
      </div>
    </section>
  )
}

export default ExtractTypes
