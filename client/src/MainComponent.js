import React from 'react'
import Link from './LinkComponent'

function Main({ lang }) {
  var json = require(`./lang/CV/${lang}.json`)

  return (
    <div className="flex flex-wrap justify-center items-stretch bg-tatry bg-repeat">
      {
        json.map((person) => {
          console.log(person)
          return <Link person={person} lang={lang} />
        })
      }
    </div>
  )
}

export default Main
