import React from 'react'
import corageoLogo from './img/corageoLogo.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {useLocation}  from 'react-router-dom/'

function Header() {
  return (
    <>
        <nav>
          <ul className="bg-yellow-300 flex justify-center items-center">
            <a href="/"><li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li></a>
            <li className="px-20">CV - 4 žrebci</li>
            <li>
            <DropdownButton title="Lang">
            <Dropdown.Item href={`/sk/${useLocation().pathname.slice(4)}`}>sk<br /></Dropdown.Item>
            <Dropdown.Item href={`/en/${useLocation().pathname.slice(4)}`}>en</Dropdown.Item>
            </DropdownButton>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Header
