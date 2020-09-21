import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
      className="Cart--Product--Image img-fluid"
    />
  ) : null
  /* eslint-disable no-unused-vars */
  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null
  /* eslint-enable no-unused-vars */
  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <>
      <div className="Cart container row">
        <div className="row">
          <div className="col-lg-2 Thumbnail--Section">
            <span className="Cart--Thumbnail my-auto">{variantImage}</span>
          </div>
          <div className="col-lg-2">{line_item.title}</div>
          <div className="col-lg-2">
            {line_item.variant.selectedOptions[0].value}
          </div>
          <div className="col-lg-2">{line_item.quantity}</div>
          <div className="col-lg-2">${line_item.variant.price}</div>
          <div className="col-lg-2">
            ${line_item.quantity * line_item.variant.price}
          </div>
          <div className="col-lg-2">
            <button
              className="Button-blank"
              style={{
                background: 'var(--secondary)',
                color: '#ffffff',
              }}
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LineItem
