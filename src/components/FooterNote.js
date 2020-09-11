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
      <div className="row mx-auto">
        <div className="col-lg-6">
          {footerNote1 && (
            <Image
              background
              resolutions="large"
              src={footerNote1}
              alt={title}
              size="cover"
              className="FooterNote--Image"
            />
          )}
          <div className="container relative">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="col-lg-6">
          {footerNote2 && (
            <Image
              background
              src={footerNote2}
              alt={title}
              size="cover"
              className="FooterNote--Image"
            />
          )}
          <div className="container relative col-lg-5 mx-auto">
            <h1>{title}</h1>
          </div>
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
