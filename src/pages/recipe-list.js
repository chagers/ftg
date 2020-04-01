import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import RecipePreview from '../components/recipe-preview'

class RecipeList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const recipes = get(this, 'props.data.allContentfulRecipe.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <div className="uk-container">
          <h2>looking for a nom nom recipe, my moon and my stars?</h2>
          <div>
            {recipes &&
              recipes.map(({ node }) => (
                <RecipePreview recipe={node} key={node.slug}/>
              ))
            }
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
