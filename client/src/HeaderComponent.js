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
              <DropdownButton drop="right" title="Lang" className=" border rounded-lg p-2">
                <div className="ml-4 border rounded-lg py-2 -mt-2">
                  <Dropdown.Item className="rounded-lg px-2 py-2 hover:bg-gray-300" href={`/sk/${useLocation().pathname.slice(4)}`}>sk</Dropdown.Item>
                  <p className="inline"> / </p> 
                  <Dropdown.Item className="rounded-lg px-2 py-2 hover:bg-gray-300" href={`/en/${useLocation().pathname.slice(4)}`}>en</Dropdown.Item>
                </div>
              </DropdownButton>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Header
