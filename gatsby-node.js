const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const recipeDetail = path.resolve('./src/templates/recipe-detail.js')
    console.log()
    resolve(
      graphql(
        `
          {
            allContentfulRecipe {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const recipes = result.data.allContentfulRecipe.edges
        recipes.forEach((recipe, index) => {
          createPage({
            path: `/recipe/${recipe.node.slug}/`,
            component: recipeDetail,
            context: {
              slug: recipe.node.slug
            },
          })
        })
      })
    )
  })
}
