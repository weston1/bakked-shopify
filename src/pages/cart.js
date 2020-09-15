import React from 'react'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

import Cart from '../components/Cart'

const CartPage = () => (
  <Layout>
    <PageHeader
      title="Cart"
      subtitle="#GETBAKKED Today"
      className="bg-primary-dusty"
    />
    <section className="section">
      <div className="container">
        <Cart />
      </div>
    </section>
  </Layout>
)

export default CartPage
