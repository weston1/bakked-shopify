import React from 'react'
import PropTypes from 'prop-types'

import './Loilpoints.css'

const Loilpoints = ({ title, className = '' }) => {
  return (
    <section className="Loilpoints section">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-6">IMAGE</div>
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
              <button className="Button">SIGN UP now</button>
              <button className="Button">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Loilpoints.propTypes = {
  title: PropTypes.string
}

export default Loilpoints
