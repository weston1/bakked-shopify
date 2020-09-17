import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import './Cart.css'
import '../../components/globalStyles.scss'

const Cart = () => {
  const {
    store: { checkout }
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className="section Cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img
              src="../images/logo-y.svg"
              width="25px"
              alt="Bakked Extracts"
            />
          </div>
          <div className="col-lg-2">
            <b>Product</b>
          </div>
          <div className="col-lg-2">
            <b>Variant</b>
          </div>
          <div className="col-lg-2">
            <b>Quantity</b>
          </div>
          <div className="col-lg-2">
            <b>Price</b>
          </div>
          <div className="col-lg-2">
            <b>Amount</b>
          </div>
          <div className="col-lg-2">&nbsp;</div>
        </div>
        {line_items}

        <div className="Cart--row">
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-12">
            <h2 className="Cart--Subtotal">Subtotal</h2>
          </div>
          <div className="col-lg-2">${checkout.subtotalPrice}</div>
          <div className="col-lg-2">&nbsp;</div>
        </div>

        <div className="Cart--row">
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-6">
            <h2>Total</h2>
          </div>
          <div className="col-lg-6">${checkout.totalPrice}</div>
          <div className="col-lg-6">&nbsp;</div>
        </div>
        <div className="col-lg-12 mx-auto">
          <button
            className="Button Cart--Checkout"
            style={{ background: 'var(--secondary)' }}
            onClick={handleCheckout}
            disabled={checkout.lineItems.length === 0}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
