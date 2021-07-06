import React from 'react'
import corageoLogo from './corageoLogo.png'

function Header() {
  return (
    <>
        <nav >
          <ul  className="flex">
            <li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li>
            <li className="px-20">CV - 4 žrebci</li>
          </ul>
        </nav>
    </>
  )
}

export default Header
