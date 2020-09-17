import React from 'react'
import { Link } from 'gatsby'
import { FiShoppingCart } from 'react-icons/fi'

const ButtonBuyGyro = ({ title, buttonBuyGyro }) => {
  return (
    <Link to="/cart/" alt="Buy Bakked Gyro" className="Button ButtonBuyGyro">
      <FiShoppingCart size="2rem" className="mb-auto" />
      &nbsp; Buy An Empty {title}
    </Link>
  )
}

export default ButtonBuyGyro
