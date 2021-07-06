import React from 'react'
import Link from './LinkComponent'

function Main() {
  var json = require('./lang/CV/en.json')
  console.log(json)

  return (
    <div className="flex flex-wrap h-full justify-center items-stretch bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      {
        json.map((person) => {
          console.log(person)
          return <Link person={person} />
        })
      }
    </div>
  )
}

export default Main
