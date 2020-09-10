import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title }) => (
  <main className="Home">
    <section className="section thick">
      <div className="container">
        <div className="taCenter col-lg-6 mx-auto">
          <h2>
            <span>BAKKED</span> R&amp;D&nbsp;LAB
          </h2>
          <p>
            A lot of concentration went into developing these concentrates. We
            tasked our esteemed team of Dabologists, the finest dabbing minds in
            the cannabis industry, with not only developing innovative
            concentrate delivery systems but with creating first-class
            concentrates to go into the&nbsp;devices.
          </p>
        </div>
      </div>
    </section>
    <section className="section thick">
      <div className="container">
        <div className="taCenter col-lg-6 mx-auto">
          <h2>DELIVERY MECHANISM </h2>
          <p>
            We’re committed to finding real solutions to real problems dabbers
            have, all in the name of making dabbing easier and more accessible.
            With each problem we identify we go through a series of rigorous
            tests to help us understand how to alleviate the frustrations that
            our participants are experiencing and don’t stop until we find the
            perfect solution. Know a problem dabbers have that hasn’t been
            solved? Drop us a line below and it just may make it into our
            R&amp;D pipeline.
          </p>
        </div>
      </div>
    </section>
    <section className="section thick bg-primary-dusty">
      <div className="container">
        <div className="taCenter col-lg-6 mx-auto">
          <h2>CANNABIS EXTRACT&nbsp;R&amp;D</h2>
          <p>
            We offer three distinct forms of dabbable concentrates for you to
            choose from.
          </p>
          <img
            src={sticker1}
            alt={title}
            className="img-fluid mx-auto py-4 text-center"
          />
        </div>
      </div>
    </section>
    <section className="section thick bg-dusty">
      <div className="container">
        <div className="taCenter mx-auto">
          <h3>Extraction Condition Optimization</h3>
          <p>
            Countless hours of R&amp;D have allowed us to analyze our extraction
            methods and fine tune operating conditions to bring out the best in
            every batch.
          </p>
          <div className="container">
            <div className="row mx-auto">
              <div className="col-lg-6 col-6 bg-primary">
                <img src={sticker1} alt={title} className="img-fluid" />
              </div>
              <div className="col-lg-6 col-6 text-left">
                <h4>Hydrocarbon Extraction</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  venenatis libero et nisi convallis imperdiet. Phasellus non
                  mattis nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed venenatis libero et nisi convallis
                  imperdiet. Phasellus non.
                </p>
              </div>

              <div className="col-lg-6 col-6 text-left">
                <h4>Solventless Extraction</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  venenatis libero et nisi convallis imperdiet. Phasellus non
                  mattis nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed venenatis libero et nisi convallis
                  imperdiet. Phasellus non.
                </p>
              </div>
              <div className="col-lg-6 col-6 bg-primary">
                <img src={sticker1} alt={title} className="img-fluid" />
              </div>

              <div className="col-lg-6 col-6 bg-primary"></div>
              <div className="col-lg-6 col-6 text-left">
                <h4>CO2 Extraction</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  venenatis libero et nisi convallis imperdiet. Phasellus non
                  mattis nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed venenatis libero et nisi convallis
                  imperdiet. Phasellus non mattis nibh.
                </p>
              </div>
            </div>
          </div>
          <p>
            Feeling ready to take on the world one dab at a time? Check out our
            dabbing glossary here
          </p>
          <Link to="/find/" className="Button" alt="Explore Here">
            Explore Here
          </Link>
        </div>
      </div>
    </section>
    <section className="section thick bg-primary-dusty">
      <div className="container row">
        <div className="taCenter col-8 mr-auto about-img-1"></div>
        <div className="taCenter col-6 ml-auto about-img-2"></div>
      </div>
      <div className="container">
        <div className="col-lg-4 col-md-4 col-8 blockquote-primary p-4 about-quote">
          <div className="p-4">
            <p>
              &quot;This product is hands down the best concentrate for users
              on-the-go. 75-80% with same batch terpenes your only problem would
              be you didn't buy more!&quot;
            </p>
            <p className="yellow small">-WEEDMAPS</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-10 py-3 mx-auto">
            <h2>
              CLEAN &amp; PURE EXPEREIENCE, <span>EVERY&nbsp;TIME</span>.
            </h2>
            <p>
              Every batch of oil is sourced from high-quality, locally grown
              cannabis. Our cannabis extraction method processes raw material
              through a supercritical, closed-loop organic CO2 extraction
              system. This helps ensure that you are getting a safe and pure
              product. The oil is triple refined with low heat, to preserve the
              naturally occurring cannabis terpenes that create the amazing
              taste we have all come to expect from our products. All of our
              products are QA tested, giving us the lowest failure rate in the
              industry. So you can rest easy knowing your product will be ready
              to use right out of the box.
            </p>
            <p>
              Bakked products provide quality and value to cannabis consumers
              and the extraction method we use is at the core of delivering on
              that promise. Organa Labs has always focused on quality, purity
              and potency during the development, production, testing of our
              products. If you have questions about our cannabis extraction
              method, or would like to know more about the behind-the-scenes
              process, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
)

// Export Default AboutPage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  ## Query for AboutPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
