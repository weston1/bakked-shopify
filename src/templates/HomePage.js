import React from 'react'
import { graphql, Link } from 'gatsby'
import _ from 'lodash'
import { Fade, Slide } from 'react-awesome-reveal'
import BakkedHeader from '../components/BakkedHeader'
import PostSection from '../components/PostSection'
import Content from '../components/Content'
import Layout from '../components/Layout'
import ButtonDispensary from '../components/ButtonDispensary'
import StickerBreaker from '../components/StickerBreaker'
import FindSection from '../components/FindSection'
import BakkedMarquee from '../components/BakkedMarquee'
import StripesMarquee from '../components/StripesMarquee'
import ExtractTypes from '../components/ExtractTypes'

import FormSignUp from '../components/FormSignUp'
import InstagramSection from '../components/InstagramSection'

export const convertProductsToPostFormat = products => {
  let formattedProducts = []
  products.forEach(service => {
    let singleItem = {
      title: service.title,
      excerpt: _.truncate(service.description, {
        length: 140,
        omission: `…`
      }),
      featuredImage: service.images[0].originalSrc,
      slug: '/product/' + service.handle
    }
    formattedProducts.push(singleItem)
  })

  return formattedProducts
}

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  sticker1,
  sticker2,
  section1,
  sectionTwo,
  sectionTwoImg,
  sectionTwoImg2,
  section3,
  bakkedImg3,
  bakkedImg4,
  liveResin,
  liveResinSticker,
  liveResinTitle,
  highTerpExtract,
  highTerpSticker,
  highTerpTitle,
  posts,
  products
}) => (
  <main className="Home">
    <BakkedHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      className="section thick bg-dusty"
    />

    <section className="section thick bg-dusty">
      <Fade>
        <div className="container">
          <Content source={section1} className="col-lg-9 text-center mx-auto" />
        </div>
      </Fade>
    </section>

    <BakkedMarquee />

    <section className="section bg-primary-dusty">
      <div className="bg-product-stripes">
        <div className="container">
          <div className="row col-lg-12 mx-auto">
            <div className="col-lg-5 p-3">
              <img
                src={sectionTwoImg}
                alt={title}
                className="img-fluid mx-auto py-4 text-center"
              />
              <Content source={sectionTwo} className="text-left" />
              <div className="Button-block">
                <Link to="/products/" className="Button">
                  SEE WHY WE MADE IT
                </Link>
                <ButtonDispensary />
              </div>
            </div>
            <div className="col-lg-7 my-auto bg-dots">
              <Fade direction="up">
                <img
                  src={sectionTwoImg2}
                  alt={title}
                  className="img-fluid mx-auto text-center"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>

    <StickerBreaker sticker1={sticker1} sticker2={sticker2} />

    <section className="section thick bg-primary-dusty">
      <div className="bg-product-stripes-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto py-5 bg-dots-left">
              <img
                src={bakkedImg3}
                alt={title}
                className="img-fluid mx-auto text-center"
              />
            </div>
            <div className="col-lg-4 my-auto">
              <img
                src={bakkedImg4}
                alt={title}
                className="img-fluid mx-auto text-center"
              />
              <Content source={section3} />
              <Link to="/products" className="Button">
                SEE WHY WE MADE IT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <StripesMarquee />

    <section className="section">
      <div className="container">
        <ExtractTypes
          liveResin={liveResin}
          liveResinSticker={liveResinSticker}
          liveResinTitle={liveResinTitle}
          highTerpExtract={highTerpExtract}
          highTerpSticker={highTerpSticker}
          highTerpTitle={highTerpTitle}
        />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

    {!!products.length && convertProductsToPostFormat(products) && (
      <section className="section">
        <div className="container">
          <PostSection
            title="Shop Bakked"
            posts={convertProductsToPostFormat(products)}
          />
        </div>
      </section>
    )}

    <FindSection />

    <FormSignUp />

    {!!posts.length && (
      <section className="section">
        <div className="container">
          <PostSection title="Bakked News" posts={posts} />
        </div>
      </section>
    )}

    <InstagramSection />
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, posts, products, projects } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate
      {...page}
      {...page.frontmatter}
      body={page.html}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      products={products.edges.map(service => ({
        ...service.node
      }))}
    />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        sticker1
        sticker2
        section1
        sectionTwo
        sectionTwoImg
        sectionTwoImg2
        section3
        bakkedImg3
        bakkedImg4
        liveResin
        liveResinSticker
        liveResinTitle
        highTerpExtract
        highTerpSticker
        highTerpTitle
        accordion {
          title
          content
        }
      }
    }

    posts: allMarkdownRemark(
      limit: 3
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "dddd MMMM DD, YYYY")
            categories {
              category
            }
            featuredImage
          }
        }
      }
    }

    products: allShopifyProduct(
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          title
          description
          images {
            originalSrc
          }
          handle
        }
      }
    }
  }
`
