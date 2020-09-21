import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './Slider.css'

export default props => {
  const [pause] = React.useState(false)
  const timer = React.useRef()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2,
    spacing: 15,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
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
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            )
          })}
          <h3 className="my-auto">001</h3>
        </div>
      )}
    </>
  )
}
