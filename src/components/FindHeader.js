import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import FormMini from './FormMini'
import './FindHeader.css'

const FindHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' FindHeader-large'
  return (
    <div className={`FindHeader relative ${className}`}>
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
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="FindHeader--Title">{title}</h1>
          {subtitle && (
            <Content className="FindHeader--Subtitle" src={subtitle} />
          )}
          <label className="">
            <input
              className="FormMini--Input"
              type="number"
              placeholder="Zip"
              name="Ziop"
              required
            />
          </label>
        </div>
      </div>
    </div>
  )
}

FindHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default FindHeader
