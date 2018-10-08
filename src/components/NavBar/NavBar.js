import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import './navbar.css'

class NavBar extends React.Component {
  buildLink(pathName, linkText) {
    let homeClasses = classNames('nav-item', {active: this.props.location.pathname === pathName})
    return <Link to={pathName} className={homeClasses}><li>{linkText}</li></Link>
  }

  render() {
    return (
      <header className='navbar'>
        <div className='navbar-top'></div>
        <div className='navbar-container container'>
          <Link to='/' className='nav-logo'>
            <img className='nav-logo-img' src='./reach_engine_logo.jpg' alt='reach engine logo'/>
          </Link>
          <nav className='nav-container'>
            <ul className='right-nav-items'>
              {this.buildLink('/', 'Issues')}
              {this.buildLink('/about', 'About')}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default NavBar
