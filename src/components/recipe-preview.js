import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ recipe }) => (
  <div className="uk-card uk-card-default uk-card-body">
    <img src={recipe.linkToImage}></img>
    <h3 className="uk-card-title">
      <Link to={`/recipe/${recipe.slug}`}>{recipe.title}</Link>
    </h3>
    {recipe.tags &&
      recipe.tags.map((tag) => 
      <p key={tag}>
      {tag}
      </p>
    )}
  </div>
)
