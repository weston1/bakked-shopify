import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import './Form.css'
import './FooterNote.css'

const FooterNote = ({ footerNote1, footerNote2 }) => {
  return (
    <section className="FooterNote">
      <div className="container text-center">
        <h3>See How We Made</h3>
      </div>
      <div className="row mx-auto bg-primary">
        <div className="col-lg-6">
          <img src={footerNote1} alt="Bakked Extracts" className="img-fluid" />
        </div>
        <div className="col-lg-6 bg-secondary">
          <Image
            source={footerNote2}
            alt="Bakked Extracts"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  )
}

FooterNote.propTypes = {
  footerNote1: PropTypes.string,
  footerNote2: PropTypes.string
}

export default FooterNote
