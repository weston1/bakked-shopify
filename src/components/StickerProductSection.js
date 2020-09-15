import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import './StickerProductSection.css'

const StickerProductSection = ({
  sticker1,
  sticker2,
  sticker3,
  sticker4,
  sticker5
}) => {
  return (
    <section className="StickerProductSection bg-dusty my-auto">
      <div className="StickerProductSection--Container">
        <div className="StickerProductSection--BG"></div>
      </div>
      <div className="container">
        <div className="StickerProductSection--line my-auto">
          <Image
            src={sticker2}
            alt="Bakked Extracts - REPLACE"
            className="StickerProductSection--header--1"
          />
          <Image
            src={sticker1}
            alt="Bakked Extracts - REPLACE"
            className="StickerProductSection--sticker--2"
          />
          <Image
            src={sticker3}
            alt="Bakked Extracts - REPLACE"
            className="StickerProductSection--header--3"
          />
          <Image
            src={sticker4}
            alt="Replace"
            className="StickerProductSection--sticker--3"
          />
        </div>
      </div>
    </section>
  )
}
StickerProductSection.propTypes = {
  sticker1: PropTypes.string,
  sticker2: PropTypes.string
}

export default StickerProductSection
