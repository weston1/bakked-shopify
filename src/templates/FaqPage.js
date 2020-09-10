import React from 'react'

import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'

// Export Template for use in CMS preview
export const FaqPageTemplate = ({ title, subtitle, accordion, body }) => (
  <main className="FaqPage dark">
    <section className="section">
      <div className="container">
        <PageHeader title={title} subtitle={subtitle} className="taCenter" />
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const FaqPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <FaqPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default FaqPage

export const pageQuery = graphql`
  query FaqPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        accordion {
          title
          description
        }
      }
    }
  }
`
