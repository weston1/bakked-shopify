import React from 'react'
import { Link } from 'gatsby'
import { MapPin } from 'react-feather'

const ButtonDispensary = () => {
  return (
    <Link
      to="/find/"
      alt="Find Bakked Extracts"
      className="Button ButtonDispensary"
    >
      <MapPin />
      &nbsp; Find A Dispensary
    </Link>
  )
}

export default ButtonDispensary
