import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Content from './Content'
import Image from './Image'

const bakkedImg1 = '../images/logo-b.svg'

const ExtractTypes = ({ bakkedImg1, className = '' }) => {
  return (
    <section className="ExtractTypes">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="ExtractTypes--Title">Extract Types</h2>
        <div className="container">
          <div className="col-lg-6">
            <Image src="{bakkedImg1}" alt="hi" />
          </div>
          <div className="col-lg-6"></div>
        </div>
        <p>TESTING IN SESSION: DIAMONDS, ROSIN &amp; LIVE BUDDER</p>
        <Link to="/products" className="button mx-auto text-center">
          Explore Oil Types
        </Link>
      </div>
    </section>
  )
}

ExtractTypes.propTypes = {
  title: PropTypes.string,
  bakkedImg1: PropTypes.string
}

export default ExtractTypes
