import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Image from '../components/Image'
import FooterNote from '../components/FooterNote'

import BackgroundVideo from '../components/BackgroundVideo'
import { ShoppingCart, MapPin } from 'react-feather'

// Export Template for use in CMS preview
export const ProductsPageTemplate = ({
  title,
  subtitle,
  video,
  videoPoster,
  videoTitle,
  videoLogo,
  section1,
  section2,
  section3,
  section4,
  bakkedImg1,
  bakkedImg2,
  bakkedImg3,
  sticker1,
  sticker2,
  sticker3,
  featureBlock1,
  featureBlock2,
  footerNote1,
  footerNote2
}) => (
  <main>
    <section className="BackgroundVideo-section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
    <section className="section Product--Header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Content source={section1} className="product-list" />
            <button className="Button">
              <MapPin />
              &nbsp; Find A Dispensary
            </button>
            <button className="Button">
              <ShoppingCart />
              &nbsp; BUY AN EMPTY GYRO
            </button>
          </div>
          <div className="col-lg-5">
            <img
              src={featureBlock1}
              alt={title}
              className="img-fluid mx-auto text-center"
            />
          </div>
        </div>
      </div>
      <img alt="Bakked Sticker 1" src="../images/svg/caution-tape.svg" />
    </section>

    <section className="section bg-stripes"></section>
    <section className="section">
      <div className="container col-lg-10 text-center">
        <img alt="Bakked Sticker 1" src="../images/svg/test-symbol.svg" />
      </div>
    </section>
    <section className="section">
      <div className="container text-center">
        <Content source={section2} className="col-lg-8  mx-auto" />
      </div>
    </section>

    <section className="section bg-dusty">
      <div className="col-lg-12">
        <small>TEST 4.12C</small>
        <h2>ANTI-GRAVITY SIMULATOR</h2>
      </div>
      <div className="row">
        <div className="col-6">
          Group A is given a standard dab container and asked to walk around
          with it on their person for the entire day and to report back.
        </div>
        <div className="col-6">
          Group B is given a container full of concentrate anchored with a
          gyroscoping base and asked to walk around with it all day.
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container col-lg-10 text-center">
        {sticker1 && <Image src={sticker1} alt={title} size="10rem" />}
        <Image src={sticker2} alt={title} size="cover" />
        <Image src={sticker3} alt={title} size="cover" />
        {sticker1 && <Image src={sticker1} alt={title} size="10rem" />}
      </div>
    </section>

    <img alt="Bakked Sticker 1" src="../images/svg/caution-tape.svg" />

    <section className="section bg-primary-dusty">
      <div className="container row">
        <div className="col-lg-6">
          <Content source={section3} className="my-auto" />
          <button className="Button">EXPLORE OIL TYPES</button>
        </div>
        <div className="col-lg-6">
          <img
            src={bakkedImg2}
            alt={title}
            className="img-fluid mx-auto text-center"
          />
        </div>
      </div>
    </section>

    <section className="section bg-stripes"></section>

    <section className="section">
      <div className="container row">
        <div className="col-lg-6">
          <img
            src={bakkedImg2}
            alt={title}
            className="img-fluid mx-auto text-center"
          />
        </div>
        <div className="col-lg-6">
          <Content source={section4} className="my-auto" />
          <button className="Button">EXPLORE OIL TYPES</button>
        </div>
      </div>
    </section>
    <img
      src={footerNote1}
      alt={title}
      className="img-fluid mx-auto text-center"
    />
    <FooterNote />
  </main>
)

const ProductsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProductsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProductsPage

export const pageQuery = graphql`
  query ProductsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        video
        videoLogo
        videoPoster
        videoTitle
        featuredImage
        section1
        section2
        section3
        section4
        bakkedImg1
        bakkedImg2
        bakkedImg3
        sticker1
        sticker2
        sticker3
        featureBlock1
        featureBlock2
        footerNote1
        footerNote2
      }
    }
  }
`
