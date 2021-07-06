import React from 'react'
import corageoLogo from './img/corageoLogo.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {useLocation}  from 'react-router-dom/'

function Header() {
  return (
    <>
        <nav>
          <ul className="bg-white flex content-around">
            <a href="/"><li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li></a>
            <li className="font-display text-yellow-600 text-xl ml-80 pt-8">
            <DropdownButton title="Lang">
            <Dropdown.Item href={`/sk/${useLocation().pathname.slice(4)}`}>sk</Dropdown.Item>
            <Dropdown.Item href={`/en/${useLocation().pathname.slice(4)}`}>en</Dropdown.Item>
            </DropdownButton>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Header
