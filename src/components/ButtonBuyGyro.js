import React from 'react'
import { Link } from 'gatsby'
import { FiShoppingCart } from 'react-icons/fi'
import './ButtonDispensary.css'

const ButtonBuyGyro = ({ title }) => {
  return (
    <Link to="/cart/" alt="Buy Bakked Gyro" className="Button ButtonDispensary">
      <FiShoppingCart className="ButtonDispensary--Icon" />
      &nbsp; &nbsp; Buy An Empty {title}
    </Link>
  )
}

export default ButtonBuyGyro
