import React from 'react'
import Link from './LinkComponent'

function Main() {
  /* var json = require('./CVs.json')
  const Person = json['en'][parseInt(id['id']) - 1]
  console.log(Person)
  var Meno = Person['name']
  var Age = Person['age'] */

  return (
    <div className="flex flex-wrap h-full justify-center items-stretch bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <Link />
    </div>
  )
}

export default Main
