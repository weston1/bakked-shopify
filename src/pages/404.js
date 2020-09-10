import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import { AlertTriangle } from 'react-feather'

import Layout from '../components/Layout'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>404</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <h1>[404]</h1>
            <AlertTriangle size="2rem" />
            <h4>&nbsp;outlook hazy&nbsp;</h4>
            <p>
              Head back to <br />
              <Link to="/" className="Button">
                #GET {_get(data, 'globalSettings.siteTitle')}
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)
