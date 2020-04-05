import React from 'react'
import { Link } from 'gatsby'
import eggplant from '../assets/eggplant.png';

export default () => (
  <nav role="navigation" className="uk-navbar-container" uk-navbar="true">
    <div className="uk-navbar-left">
      <div className="uk-navbar-item uk-logo">
        <img src={eggplant} alt="eggplant" />
      </div>
      <div className="uk-navbar-item">Feed the Gillmores</div>
    </div>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Homer</Link>
            </li>
            <li>
              <Link to="/recipe-list">Recipe List</Link>
            </li>
        </ul>
    </div>
  </nav>
)
