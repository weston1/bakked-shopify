import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import './Loilpoints.css'

let loilpointsImg = '../../images/photos/loilpoints.jpg'

const Loilpoints = ({ title, loilpointsImg, className = '' }) => {
  return (
    <section className="Loilpoints section">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="../../images/photos/loilpoints.jpg"
              alt="loilpoints - Reward The Way You Live"
              className="img-fluid mx-auto py-4 text-center"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="Loilpoints--Title">Located in colorado?</h2>
            <div className="py-4">
              <p>
                <span className="text-success">earn</span> points for your
                Bakked product purchases.
              </p>
              <p>
                <span className="text-success">burn</span> those points on gear,
                products &amp; experiences with loilpoints cannabis rewards.
              </p>
              <a
                href="https://loilpoints.com/signup"
                alt="loilpoints"
                className="Button"
              >
                Sign Up Now
              </a>
              <a
                href="https://loilpoints.com/about"
                alt="loilpoints"
                className="Button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Loilpoints.propTypes = {
  title: PropTypes.string,
  loilpointsImg: PropTypes.string
}

export default Loilpoints
