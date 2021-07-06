import React from 'react'

function CV(id) {
  var lang = id['lang']
  var json = require(`./lang/CV/${lang}.json`)
  const Person = json[parseInt(id['id']) - 1]
  console.log(Person)
  var Meno = Person['name']
  var Age = Person['age']

  function Jobs() { //mapping Person's Jobs in json and pushing it to div
    return (Person['experience'].map((Job) => {
      return <> <div>{Job.name}</div><div>{Job.company}</div><div>{Job.start} - {Job.end}</div></>
    }))
  }

  function Education() {    //mapping Person's Education in json and pushing it to div
    return (Person['education'].map((School) => {
      return <> <div>{School.name}</div><div>{School.adress}</div><div>{School.start} - {School.end}</div></>
    }))
  }

  function Skills() {
    return (Person['skills'].map((skill) => {
      return <>{skill} <br /></>
    }))
  }

  function Interests() {
    return (Person['interests'].map((interest) => {
      return <>{interest} <br /></>
    }))
  }

  return (
    <div className="w-100 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" >
      <section className="px-4 mt-10 mx-10 rounded-xl border-8 border-gray-700 " id="about">
        <div>
          <h1><b>Meno:</b> {Meno}</h1>
          <h3><b>Vek:</b> {Age}</h3>
        </div>
      </section>
      <section id="Experience">
        <h2>Experience</h2>
        <div>
          {Jobs()}
        </div>
      </section>
      <section id="Education">
        <div>
          {Education()}
        </div>
      </section>
      <section id="skills">
        <div>
          <h1>Skills</h1>
          {Skills()}
        </div>
      </section>
      <section id="Interests">
        <h1>Interests</h1>
        {Interests()}
      </section>

    </div>
  )
}

export default CV
