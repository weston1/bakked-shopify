import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from './Image'

import './Form.css'
import './FooterNote.css'

const FooterNote = ({ title, footerNote1, footerNote2, partnerProduct }) => {
  return (
    <section className="FooterNote FooterNote--Image--Container">
      <div className="container text-center">
        <h3>See How We Made</h3>
      </div>
      <div className="row mx-auto">
        <div className="col-lg-6 FooterNote--Image--Block">
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
            <div className="col-lg-12 mr-auto my-auto">
              <Link className="FooterNote--Button Button">
                The {partnerProduct}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 FooterNote--Image--Block">
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
            <Link className="FooterNote--Button Button">Our Oil</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

FooterNote.propTypes = {
  title: PropTypes.string,
  footerNote1: PropTypes.string,
  footerNote2: PropTypes.string,
}

export default FooterNote
