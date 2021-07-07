import React from 'react'
import Link from './LinkComponent'

function Main({ lang }) {
  var json = require(`./lang/CV/${lang}.json`)

  return (
    <div className="flex flex-wrap mb-8 h-full justify-center items-stretch bg-tatry object-cover">
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
