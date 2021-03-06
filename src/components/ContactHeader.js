import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import FormMini from './FormMini'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import './ContactHeader.css'

const ContactHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = '',
}) => {
  if (large) className += ' ContactHeader-large'
  return (
    <div className={`ContactHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container">
        <div className="col-lg-5">
          <h1 className="ContactHeader--Title">{title}</h1>
          <div className="ContactHeader--Method">
            <FiMail size="2.4rem" className="ContactHeader--Method--Icon" />
            <p>help@bakked.com</p>
          </div>
          <div className="ContactHeader--Method">
            <FiPhoneCall
              size="2.4rem"
              className="ContactHeader--Method--Icon"
            />
            <p>720.420.4200 </p>
          </div>
          <FormMini />
        </div>
      </div>
    </div>
  )
}

ContactHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default ContactHeader
