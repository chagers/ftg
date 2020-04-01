import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class RecipeDetailTemplate extends React.Component {
  render() {
    const recipe = get(this.props, 'data.contentfulRecipe')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${recipe.title} | ${siteTitle}`} />
          <div>
            <img src={recipe.linkToImage}></img>
          </div>
          <div>
            <h1>{recipe.title}</h1>
            <p>
              {recipe.yields} | {recipe.time}
            </p>
            <a href={recipe.source}></a>
            <div
              dangerouslySetInnerHTML={{
                __html: recipe.ingredientsLong.childMarkdownRemark.html,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: recipe.preparation.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default RecipeDetailTemplate

export const pageQuery = graphql`
  query RecipeDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulRecipe(slug: { eq: $slug }) {
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
`
