import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import RecipePreview from '../components/recipe-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const recipes = get(this, 'props.data.allContentfulRecipe.edges')

    console.log(this.props);

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recipe List</h2>
            <ul className="recipe-list">
              {recipes.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <RecipePreview recipe={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRecipe(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          yields
          time
          tags
          linkToImage
          source
          ingredientsLong {
            childMarkdownRemark {
              html
            }
          }
          preparation {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
