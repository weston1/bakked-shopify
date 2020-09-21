import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

import './StickerProductSection.css'

const StickerProductSection = ({ sticker1, sticker3, sticker4, sticker5 }) => {
  return (
    <section className="StickerProductSection bg-dusty my-auto">
      <div className="container">
        <div className="StickerProductSection--line my-auto">
          <Image
            src={sticker4}
            alt="Bakked Extracts - Arrow Down"
            className="StickerProductSection--sticker--1"
          />
          <Image
            src={sticker5}
            alt="Bakked Extracts - Precious Cargo - This End Will Always Be Up"
            className="StickerProductSection--sticker--2"
          />
          <Image
            src={sticker3}
            alt="Bakked Extracts - Mind Altering Substance"
            className="StickerProductSection--sticker--3"
          />
          <Image
            src={sticker4}
            alt="Arrow Down"
            className="StickerProductSection--sticker--4"
          />
        </div>
      </div>
    </section>
  )
}
StickerProductSection.propTypes = {
  sticker1: PropTypes.string,
  sticker5: PropTypes.string,
}

export default StickerProductSection
