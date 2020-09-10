import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactHeader from '../components/ContactHeader'
import './ContactPage.css'
import '../components/Form.css'
import FormSignUp from '../components/FormSignUp'
import Accordion from '../components/Accordion'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  accordion
}) => (
  <main className="Contact">
    <ContactHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <h3>FAQ QUESTIONS</h3>
      <Accordion title="features" items={accordion} />

      <div className="container Contact--Section1--Container">
        <div className="Contact-Container">
          <div className="col-lg-12 text-center mx-auto">
            <FormSignUp />
          </div>
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        accordion {
          title
          content
        }
      }
    }
  }
`
