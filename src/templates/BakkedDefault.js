import React from 'react'
import { graphql } from 'gatsby'

import FormRetailer from '../components/FormRetailer'
import StripesMarquee from '../components/StripesMarquee'
import InstagramSection from '../components/InstagramSection'
import Layout from '../components/Layout'
import Content from '../components/Content'

// Export Template for use in CMS preview
export const BakkedDefaultTemplate = ({
  title,
  subtitle,
  featuredImage,
  img1,
  body
}) => (
  <main className="BakkedDefault section bg-dusty">
    <section className="section thick bg-dusty">
      <div className="container">
        <div className="col-lg-10 mx-auto text-center">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <FormRetailer />
        </div>
      </div>
      <div className="container text-center">
        <div className="col-lg-8 mx-auto">
          <Content source={body} />
        </div>
        <div className="py-3">
          <a href="https://www.leafly.com/brands/bakked" alt="Leafly">
            <img alt="Leafly" src={img1} />
          </a>
        </div>
      </div>
    </section>
    <StripesMarquee />

    <InstagramSection />
  </main>
)

const BakkedDefault = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <BakkedDefaultTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default BakkedDefault

export const pageQuery = graphql`
  query BakkedDefault($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        img1
      }
    }
  }
`
