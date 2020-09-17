import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import './StickerBreaker.css'

const StickerBreaker = ({ sticker1, sticker2 }) => {
  return (
    <section className="StickerBreaker bg-primary-dusty my-auto">
      <div className="container">
        <div className="StickerBreaker--line my-auto">
          <Image
            src={sticker2}
            alt="Bakked Arrow"
            className="StickerBreaker--sticker1"
          />
          <Image
            src={sticker1}
            alt="More Dabaratus Innovations Below"
            className="StickerBreaker--sticker2"
          />
        </div>
      </div>
    </section>
  )
}
StickerBreaker.propTypes = {
  sticker1: PropTypes.string,
  sticker2: PropTypes.string
}

export default StickerBreaker
