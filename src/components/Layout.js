import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import AgeGate from './AgeGate'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import ContextProvider from '../provider/ContextProvider'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.scss'

export default ({ children, meta, title }) => {
  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query IndexLayoutQuery {
            settingsYaml {
              siteTitle
              siteDescription
              googleTrackingId
              socialMediaCard {
                image
              }
            }
            allPosts: allMarkdownRemark(
              filter: { fields: { contentType: { eq: "postCategories" } } }
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {}

          return (
            <Fragment>
              <Helmet
                defaultTitle={`${title} | ${siteTitle}`}
                titleTemplate={`%s | ${siteTitle}`}
              >
                {title}
                <link
                  href="https://ucarecdn.com"
                  rel="preconnect"
                  crossorigin
                />
                <link rel="dns-prefetch" href="https://ucarecdn.com" />
                {/* Add font link tags here */}

                <script
                  async
                  type="text/javascript"
                  src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Vx2CPp"
                ></script>
              </Helmet>

              {/* AgeGate */}

              <Fragment>
                <AgeGate />
              </Fragment>

              <Meta
                googleTrackingId={googleTrackingId}
                absoluteImageUrl={
                  socialMediaCard &&
                  socialMediaCard.image &&
                  socialMediaCard.image
                }
                {...meta}
                {...data.settingsYaml}
              />

              <Nav />

              <Fragment>{children}</Fragment>

              <Footer />
            </Fragment>
          )
        }}
      />
    </ContextProvider>
  )
}
