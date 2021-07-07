import React from 'react'
import Link from './LinkComponent'

function Main() {
  var json = require('./lang/CV/en.json')
  console.log(json)

  return (
    <div className="flex flex-wrap justify-center items-stretch bg-tatry bg-repeat">
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
