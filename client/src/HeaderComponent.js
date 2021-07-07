import React from 'react'
import corageoLogo from './img/corageoLogo.png'
import sksvg from './img/001-slovakia.svg'
import ensvg from './img/002-united-kingdom.svg'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom/'

function Header() {
  const lang = useLocation().pathname.slice(1, 3) || "en"
  const string = require(`./lang/page/${lang}.json`)

  return (
    <>
      <nav>
        <ul className="bg-white flex justify-between content-around mr-40">
          <a href="/"><li className="px-20"><img src={corageoLogo} alt="CORAgeo Logo" /></li></a>
          <li className="font-display text-yellow-600 text-xl pt-8 self-start">
            <DropdownButton drop="right" title={string.header.lang} className=" border rounded-lg p-2">
              <div className="ml-4 border rounded-lg py-2 -mt-2">
                <Dropdown.Item className="rounded-lg px-2 py-2 hover:bg-gray-300" href={`/sk/${useLocation().pathname.slice(4)}`}>
                  <img className="inline-block h-8 w-8" src={sksvg} alt="SK Flag" />
                </Dropdown.Item>
                <p className="inline"> / </p>
                <Dropdown.Item className="rounded-lg px-2 py-2 hover:bg-gray-300" href={`/en/${useLocation().pathname.slice(4)}`}>
                  <img className="inline-block h-8 w-8" src={ensvg} alt="UK Flag" />
                </Dropdown.Item>
              </div>
            </DropdownButton>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
