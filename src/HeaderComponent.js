import React from 'react'
<<<<<<< HEAD
import corageoLogo from './img/corageoLogo.png'
=======
import corageoLogo from './corageoLogo.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {useLocation}  from 'react-router-dom/'
>>>>>>> e24111dbf8f4bb5abb5613b9d0ee9c25ff1707d8

function Header() {
  return (
    <>
<<<<<<< HEAD
        <nav >
          <ul  className="flex">
            <li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li>
=======
        <nav>
          <ul className="bg-yellow-300 flex justify-center items-center">
            <a href="/"><li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li></a>
            <li className="px-20">CV - 4 žrebci</li>
            <li>
            <DropdownButton title="Lang">
            <Dropdown.Item href={`/sk/${useLocation().pathname.slice(4)}`}>sk</Dropdown.Item>
            <Dropdown.Item href={`/en/${useLocation().pathname.slice(4)}`}>en</Dropdown.Item>
            </DropdownButton>
            </li>
>>>>>>> e24111dbf8f4bb5abb5613b9d0ee9c25ff1707d8
          </ul>
        </nav>
    </>
  )
}

export default Header
