import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import Image from './Image'
import { AlertCircle } from 'react-feather'
import ButtonDispensary from './ButtonDispensary'

import './SolutionSection.css'

const SolutionSection = ({
  title,
  section3,
  section3List,
  section3Features,
  solution1
}) => {
  return (
    <section className="section bg-primary-dusty">
      <div className="container row">
        <div className="col-lg-6">
          <div className="inline">
            <AlertCircle />
            <Content source={section3} className="my-auto text-center-sm" />
            <Content
              source={section3Features}
              className="my-auto text-center-sm"
            />
            <Content source={section3List} className="my-auto" />
          </div>
          <ButtonDispensary />
        </div>
        <div className="col-lg-6">
          <img
            src={solution1}
            alt={title}
            className="img-fluid mx-auto text-center"
          />
        </div>
      </div>
    </section>
  )
}
SolutionSection.propTypes = {
  sticker1: PropTypes.string,
  sticker2: PropTypes.string
}

export default SolutionSection
