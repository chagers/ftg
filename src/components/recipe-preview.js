import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './recipe-preview.module.css'

export default ({ recipe }) => (
  <div className={styles.preview}>
    <img src={recipe.linkToImage}></img>
    <h3 className={styles.previewTitle}>
      <Link to={`/recipe/${recipe.slug}`}>{recipe.title}</Link>
    </h3>
    {recipe.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))}
  </div>
)
