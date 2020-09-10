import React from 'react'
// import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import FormMini from '../components/FormMini'
import StripesMarquee from '../components/StripesMarquee'
import Loilpoints from '../components/Loilpoints'
import PosPartners from '../components/PosPartners'
import InstagramSection from '../components/InstagramSection'

// Export Template for use in CMS preview
// < Mapbox / > USE FOR MAPBOX PLUGIN
export const FindPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <FormMini className="col-lg-6 text-center mx-auto" />
      </div>
    </section>
    <StripesMarquee />
    <section className="section Find-Card-Overlay">
      <div className="container">
        <div className="col-lg-10 Find-Card">
          <Content source={body} />
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
