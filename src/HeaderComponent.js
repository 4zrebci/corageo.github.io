import React from 'react'
import corageoLogo from './img/corageoLogo.png'

function Header() {
  return (
    <>
        <nav >
          <ul  className="flex">
            <li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li>
          </ul>
        </nav>
    </>
  )
}

export default Header
