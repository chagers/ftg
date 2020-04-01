import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav role="navigation" className="uk-navbar-container" uk-navbar="true">
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe-list">Recipe List</Link>
            </li>
        </ul>
    </div>
  </nav>
)
