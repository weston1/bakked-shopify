import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { FiMenu, FiX, FiMapPin, FiShoppingCart } from 'react-icons/fi'
import Logo from './Logo'

import './Nav.scss'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/gyro/">Gyro</NavLink>
            <NavLink to="/dabaratus/">Dabaratus</NavLink>
            <NavLink to="/find/">Find Us</NavLink>
            <NavLink to="/retailer/">Future Retailer</NavLink>
            <NavLink to="/contact/">Support/Contact</NavLink>
            <NavLink to="/cart/">
              {' '}
              <FiShoppingCart size="4rem" />
            </NavLink>
          </div>
          <Link to="/find/" className="Button--locator my-auto">
            <FiMapPin className="Button--locator--icon" />
            <span className="d-none d-md-block d-lg-block">
              &nbsp;STORE LOCATOR
            </span>
          </Link>
          <button className="Nav--MenuButton" onClick={this.handleMenuToggle}>
            {active ? <FiX size="3rem" /> : <FiMenu size="3rem" className="" />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
