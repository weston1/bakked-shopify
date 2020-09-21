import React from 'react'
import { graphql } from 'gatsby'

import StripesMarquee from '../components/StripesMarquee'
import InstagramSection from '../components/InstagramSection'
import Layout from '../components/Layout'
import Content from '../components/Content'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="DefaultPage section bg-dusty">
    <section className="section thick bg-dusty">
      <div className="container">
        <div className="col-lg-10 mx-auto text-center">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="container text-center">
        <div className="col-lg-8 mx-auto">
          <Content source={body} />
        </div>
      </div>
    </section>
    <StripesMarquee />

    <InstagramSection />
  </main>
)

const DefaultPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
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
