import React from 'react'
import PropTypes from 'prop-types'

import ButtonDispensary from './ButtonDispensary'
import './FindSection.css'

const FindSection = ({ title, className = '' }) => {
  return (
    <section className="section bg-dusty">
      <div className="FindSection">
        <div className="container col-lg-10 mx-auto text-center">
          <h2 className="FindSection--Title">
            #GetBakked at retail dispensaries
          </h2>
          <p>
            throughout california, Colorado, Oregon, New Mexico, Maine &amp;
            Vermont.
          </p>
          <ButtonDispensary />
        </div>
      </div>
    </section>
  )
}

FindSection.propTypes = {
  title: PropTypes.string
}

export default FindSection
