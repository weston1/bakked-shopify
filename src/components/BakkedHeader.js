import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import './BakkedHeader.css'

const images = [
  'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
  'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
  'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
  'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
]

export default props => {
  const [opacities, setOpacities] = React.useState([])
  const [pause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 3000,
    move(s) {
      const new_opacities = s.details().positions.map(slide => slide.portion)
      setOpacities(new_opacities)
    }
  })

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 6000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="BakkedHeader">
      <div ref={sliderRef} className="BakkedHeader--Slider fader">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="fader__slide"
            style={{ opacity: opacities[idx] }}
          >
            <img
              src={src}
              alt="Bakked Extracts - High Quality Cannabis Extracts"
            />
          </div>
        ))}
      </div>
      <div className="header-stickers">
        <div className="">
          <img
            src="../images/photos/stickers/arrow.png"
            className="sticker-header-1"
            alt="Bakked Extracts - Down Arrow"
          />
        </div>
        <div className="">
          <img
            src="../images/photos/stickers/sit-back-get-bakked.png"
            className="sticker-header-2"
            alt="Bakked Extracts - Sit Back Get Bakked"
          />
        </div>
        <div className="">
          <img
            src="../images/photos/stickers/fully-activated-high-thc-cannabis.png"
            className="sticker sticker-header-3"
            alt="Bakked Extracts - Fully Activated High THC Cannabis"
          />
        </div>
      </div>
    </div>
  )
}
