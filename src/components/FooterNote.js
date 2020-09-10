import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import './Form.css'
import './FooterNote.css'

const FooterNote = ({ title, footerNote1, footerNote2 }) => {
  return (
    <section className="FooterNote">
      <div className="container text-center">
        <h3>See How We Made</h3>
      </div>
      <div className="row mx-auto bg-primary">
        <div className="col-lg-6 FooterNote--Image">
          {footerNote1 && (
            <Image
              resolutions="large"
              src={footerNote1}
              alt={title}
              size="cover"
            />
          )}
        </div>
        <div className="col-lg-6">
          {footerNote2 && (
            <Image src={footerNote2} alt={title} className="img-fluid" />
          )}
        </div>
      </div>
    </section>
  )
}

FooterNote.propTypes = {
  title: PropTypes.string,
  footerNote1: PropTypes.string,
  footerNote2: PropTypes.string
}

export default FooterNote
