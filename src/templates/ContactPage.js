import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content from '../components/Content'
import ContactHeader from '../components/ContactHeader'
import './ContactPage.css'
import '../components/Form.css'
import PostSection from '../components/PostSection'
import Accordion from '../components/Accordion'
import InstagramSection from '../components/InstagramSection'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  accordion,
  section1
}) => (
  <main className="Contact">
    <ContactHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1 bg-dusty">
      <PostSection title="FAQ" />
      <div className="container">
        <Accordion title="features" items={accordion} />
      </div>
      <div className="section">
        <div className="container">
          <div className="col-lg-8 mx-auto text-center">
            <Content source={section1} />
          </div>
        </div>
      </div>
    </section>
    <InstagramSection />
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
        section1
        accordion {
          title
          content
          subject
        }
      }
    }
  }
`
