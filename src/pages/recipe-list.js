import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './recipe-list.module.css'
import Layout from "../components/layout"
import RecipePreview from '../components/recipe-preview'

class RecipeList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const recipes = get(this, 'props.data.allContentfulRecipe.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recipes Are Here</h2>
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

export default RecipeList

export const pageQuery = graphql`
  query RecipeListQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRecipe(sort: { fields: [title], order: DESC }) {
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
