import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormRetailer from '../components/FormRetailer'
import InstagramSection from '../components/InstagramSection'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const BakkedDefaultTemplate = ({
  title,
  subtitle,
  featuredImage,
  img1,
}) => (
  <main className="BakkedDefault bg-dusty">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      className=" col-lg-10 mx-auto"
    />
    <section className="section">
      <div className="container">
        <FormRetailer />
        <div className="container text-center">
          <div className="col-lg-8 mx-auto">
            <p>{subtitle}</p>
          </div>
          <div className="py-3">
            <img alt="Leafly" src={img1} />
          </div>
        </div>
      </div>
    </section>
    <section className="section thick bg-stripes"></section>
    <section className="section thick"></section>

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
