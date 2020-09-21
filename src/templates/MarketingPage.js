import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Image from '../components/Image'
import ButtonDispensary from '../components/ButtonDispensary'
import ButtonBuyGyro from '../components/ButtonBuyGyro'
import Slider from '../components/Slider'
import StickerProductSection from '../components/StickerProductSection'
import BakkedMarquee from '../components/BakkedMarquee'
import StripesMarquee from '../components/StripesMarquee'
import SolutionSection from '../components/SolutionSection'
import FindSection from '../components/FindSection'
import FooterNote from '../components/FooterNote'
import BackgroundVideo from '../components/BackgroundVideo'

// Export Template for use in CMS preview
export const ProductsPageTemplate = ({
  title,
  subtitle,
  sliderTagline,
  buttonBuyGyro,
  video,
  videoPoster,
  videoTitle,
  videoLogo,
  section1,
  section2,
  section3,
  section3Features,
  section3List,
  section4,
  bakkedImg1,
  bakkedImg2,
  bakkedImg3,
  solution1,
  solution2,
  solution3,
  liveResin,
  sticker1,
  sticker2,
  sticker3,
  sticker4,
  sticker5,
  diagram,
  featureBlock1,
  featureBlock2,
  footerNote1,
  footerNote2,
  partnerProduct
}) => (
  <main className="bg-dusty">
    <section className="BackgroundVideo-section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <section className="section  thick bg-dusty">
      <div className="container Product--Main">
        <div className="row">
          {/* Desktop */}
          <div className="col-lg-6 d-none d-md-block d-lg-block">
            <Content source={section1} className="text-center-sm" />
            <Content
              source={section3List}
              className="Product--Feature--List text-center-sm"
            />
            <ButtonDispensary />
            <ButtonBuyGyro buttonBuyGyro={buttonBuyGyro} />
          </div>
          <div className="col-lg-6 d-none d-md-block d-lg-block">
            <img
              src={featureBlock1}
              alt={title}
              className="Product--Featured my-auto"
            />
          </div>

          {/* Mobile */}
          <div className="d-block d-md-none d-lg-none container">
            <div className="Product--Title col-lg-12">
              <Content source={section1} className="text-center-sm" />
            </div>
            <div className="Product--Featured col-lg-6">
              <img src={featureBlock1} alt={title} className="img-fluid" />
            </div>
            <div className="Product--Title col-lg-6">
              <Content
                source={section3List}
                className="Product--Feature--List text-center-sm"
              />
              <ButtonDispensary />
              <ButtonBuyGyro title={title} buttonBuyGyro={buttonBuyGyro} />
            </div>
          </div>
        </div>
      </div>
      <div className="Product--Header">
        <div className="Product--Header--Container">
          <div className="Product--Header--BG"></div>
        </div>
      </div>
      <div className="ProductSection--Stickers">
        {sticker1 && (
          <Image
            src={sticker1}
            alt={title}
            className="ProductSection--Stickers-1"
          />
        )}
        <Image
          src={sticker2}
          alt={title}
          className="ProductSection--Stickers-2"
        />
      </div>
    </section>

    <section className="section">
      <div className="container col-lg-10 text-center">
        <img
          alt="Bakked Sticker 1"
          src="../images/svg/test-symbol.svg"
          className="Tilt icon"
        />
      </div>
      <div className="container text-center">
        <Content source={section2} className="col-lg-8  mx-auto" />
      </div>
    </section>

    <section className="section">
      <div className="col-lg-12">
        <small>TEST 4.12C</small>
        <h2>{sliderTagline}</h2>
      </div>
      <Slider />
    </section>

    <StickerProductSection
      sticker1={sticker1}
      sticker5={sticker5}
      sticker3={sticker3}
      sticker4={sticker4}
    />

    <div className="ProductPage--StripesMarquee">
      <StripesMarquee />
    </div>

    <SolutionSection
      title={title}
      section3={section3}
      section3List={section3List}
      section3Features={section3Features}
      solution1={solution1}
      solution2={solution2}
      solution3={solution3}
      diagram={diagram}
    />

    <div className="ProductPage--BakkedMarquee">
      <BakkedMarquee />
    </div>

    <section className="section thick">
      <div className="container row">
        <div className="col-lg-6">
          <img
            src={liveResin}
            alt={title}
            className="img-fluid mx-auto text-center"
          />
        </div>
        <div className="col-lg-6">
          <Content source={section4} className="my-auto" />
          <ButtonDispensary />
        </div>
      </div>
    </section>

    <FindSection />

    <FooterNote
      footerNote1={footerNote1}
      footerNote2={footerNote2}
      partnerProduct={partnerProduct}
    ></FooterNote>
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
        sliderTagline
        buttonBuyGyro
        video
        videoLogo
        videoPoster
        videoTitle
        featuredImage
        section1
        section2
        section3
        section3Features
        section3List
        section4
        bakkedImg1
        bakkedImg2
        bakkedImg3
        solution1
        solution2
        solution3
        liveResin
        sticker1
        sticker2
        sticker3
        sticker4
        sticker5
        diagram
        featureBlock1
        featureBlock2
        footerNote1
        footerNote2
        partnerProduct
      }
    }
  }
`
