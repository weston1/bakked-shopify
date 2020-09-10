import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './ContactHeader.css'

const ContactHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
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
      <div className="container col-lg-3">
        <h1 className="ContactHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="ContactHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

ContactHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default ContactHeader
