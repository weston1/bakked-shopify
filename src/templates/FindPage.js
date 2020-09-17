import React from 'react'
// import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import FindHeader from '../components/FindHeader'
import StripesMarquee from '../components/StripesMarquee'
import Loilpoints from '../components/Loilpoints'
import PosPartners from '../components/PosPartners'
import InstagramSection from '../components/InstagramSection'

// Export Template for use in CMS preview
// < Mapbox / > USE FOR MAPBOX PLUGIN
export const FindPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Contact">
    <FindHeader title={title} subtitle={subtitle} />
    <StripesMarquee />
    <section className="Find-Card-Overlay">
      <div className="container">
        <div className="col-lg-10 mx-auto">
          <Content source={body} className="Find-Card" />
        </div>
      </div>
    </section>

    <Loilpoints />
    <section className="bg-Goo"></section>
    <PosPartners />
    <InstagramSection />
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
