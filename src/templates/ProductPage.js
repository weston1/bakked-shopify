import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import ProductForm from '../components/ProductForm'
import ProductGalleryThumbnails from '../components/ProductGalleryThumbnails'

import './ProductPage.css'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const thisEdge = data.allServices.edges.find(
    edge => edge.node.id === product.id
  )

  return (
    <Layout title={product.title || false}>
      <article
        className="SingleService section bg-dusty"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="container row">
          <div className="col-lg-6 my-auto">
            <ProductGalleryThumbnails productimages={product.images} />
          </div>
          <div className="SingleService--Content relative col-lg-6">
            {product.title && (
              <h1 className="SingleService--Title" itemProp="title">
                {product.title}
              </h1>
            )}

            <div className="SingleService--InnerContent">
              <div
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <ProductForm product={product} />
            </div>

            <div className="SingleService--Pagination">
              {thisEdge && thisEdge.previous && thisEdge.previous.handle && (
                <Link
                  className="SingleService--Pagination--Link Button prev"
                  to={`/product/${thisEdge.previous.handle}`}
                >
                  Previous Product
                </Link>
              )}
              {thisEdge && thisEdge.next && thisEdge.next.handle && (
                <Link
                  className="SingleService--Pagination--Link Button next"
                  to={`/product/${thisEdge.next.handle}`}
                >
                  Next Product
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        compareAtPrice
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    allServices: allShopifyProduct(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
        }
        next {
          title
          handle
        }
        previous {
          title
          handle
        }
      }
    }
  }
`
