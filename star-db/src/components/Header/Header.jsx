import React, {Component} from 'react'

import './Header.css'

export default class Header extends Component{
  render() {
    return (
      <div className='header d-flex '>
        <div className="header__logo"><i className="fa fa-ravelry" aria-hidden="true"></i><span>StarWarsDB</span></div>
        <div className="header__nav">
          <button className="btn btn-dark">People</button>
          <button className="btn btn-outline-dark">Planets</button>
          <button className="btn btn-outline-dark">Starships</button>
        </div>

      </div>
    )
  }
}
