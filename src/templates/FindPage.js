import React from 'react'
// import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
// < Mapbox / > USE FOR MAPBOX PLUGIN
export const FindPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Find-Card-Overlay">
      <div className="container">
        <div className="Find-Card">
          <Content source={body} />
        </div>
      </div>
    </section>
  </main>
)

const FindPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <FindPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default FindPage

export const pageQuery = graphql`
  query FindPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        phone
        email
      }
    }
  }
`
