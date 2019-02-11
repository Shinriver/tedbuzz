import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <div className="HeroImg">
          <h1>Explore the National Historical Museum of Russia</h1>
          <a href="/"></a>
        </div>
      <p>Let's start from here.</p>
      <Link to="/page-2/">走你</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
