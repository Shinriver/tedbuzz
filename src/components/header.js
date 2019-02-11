import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <div className="Logo"><Link to="/"><img src={require('../images/logo-tedbuzz.png')}width='50%'/></Link>
      </div>
      <div className="LinkGroup"><Link to="/portfolio">Portfolio</Link>
      <Link to="/buzz">Buzz</Link>
      <Link to="/photography">Photography</Link></div>
    </div>
  </div>
)

export default Header
