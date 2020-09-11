import React from 'react'
import PropTypes from 'prop-types'

const PosPartners = ({ title, className = '' }) => {
  return (
    <section className="PosPartners section bg-dusty">
      <div className="container mx-auto">
        <div className="col-lg-10 text-center mx-auto">
          <h2 className="PosPartners--Title">KNOW WHAT YOU WANT?</h2>
          <div className="py-4">
            <p>
              Save time at the dispensary &amp; ensure they have what you’re
              looking for by pre-ordering using a live inventory system through
              one of these&nbsp;partners.
            </p>
            <h6>Get XX% off your first pre-order with the code “BAKKED15”</h6>
          </div>
          <div className="row">
            <div className="col-lg-3 my-auto">
              <img
                src="../../images/photos/pos/iheart-jane.png"
                alt="Iheart Jane - Order Now"
                width="100px"
                className="img-fluid text-center"
              />
            </div>
            <div className="col-lg-3 my-auto">
              <img
                src="../../images/photos/pos/dutchie.png"
                alt="Dutchie - Order Now"
                width="100px"
                className="img-fluid text-center"
              />
            </div>
            <div className="col-lg-3 my-auto">
              <img
                src="../../images/photos/pos/leafly.png"
                alt="Leafly - Order Now"
                width="100px"
                className="img-fluid text-center"
              />
            </div>
            <div className="col-lg-3 my-auto">
              <img
                src="../../images/photos/pos/weedmaps.png"
                alt="Weedmaps - Order Now"
                width="100px"
                className="img-fluid text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PosPartners.propTypes = {
  title: PropTypes.string
}

export default PosPartners
