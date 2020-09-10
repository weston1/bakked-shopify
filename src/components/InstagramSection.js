import React from 'react'
import PropTypes from 'prop-types'
import { Instagram } from 'react-feather'

import './InstagramSection.css'

const InstagramSection = ({ title, className = '' }) => {
  return (
    <section className="InstagramSection bg-dusty">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="InstagramSection--Title">#GetBakked</h2>
        <Instagram size="5rem" />
        <div className="py-4">
          <p>FOLLOW US @BAKKED_SOLUTIONS</p>
        </div>
      </div>

      <div className="Insta-Format"></div>
    </section>
  )
}

InstagramSection.propTypes = {
  title: PropTypes.string
}

export default InstagramSection
