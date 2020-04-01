import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const recipes = get(this, 'props.data.allContentfulRecipe.edges');

    console.log(this.props);

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={siteTitle}
          link={[
            {"rel": "icon", 
              "type": "image/png", 
              "href": "favicon.ico"
            }
            ]}
        />
        <div className="home-image"></div>
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
