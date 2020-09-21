import React from 'react'
import { Link } from 'gatsby'
import { MapPin } from 'react-feather'

import './ButtonDispensary.css'

const ButtonDispensary = () => {
  return (
    <Link
      to="/find/"
      alt="Find Bakked Extracts"
      className="Button ButtonDispensary"
    >
      <MapPin size="2rem" className="ButtonDispensary--Icon" />
      &nbsp; Find A Dispensary
    </Link>
  )
}

export default ButtonDispensary
