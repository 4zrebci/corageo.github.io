import React from 'react'
import ContactForm from './ContactForm'

function CV(id) {
  var lang = id['lang']
  var json = require(`./lang/CV/${lang}.json`)
  const Person = json[parseInt(id['id']-1)]
  console.log(Person)
  var Name = Person['name']
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

  //rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25
  //rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25 border border-gray-500

  return (
    <div className="min-h-screen bg-tatry bg-cover pb-28" >
      <div id="mainInfo" className="pt-10 items-center">
        <section className="text-2xl p-4 mx-10 bg-clip-padding text-center items-center rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25  border border-gray-500" id="about">
          <div>
            <h1><b>Meno:</b> {Name}</h1>
            <h3><b>Vek:</b> {Age}</h3>
          </div>
        </section>
      </div>
      <div className="flex items-start">
        <div id="info" className="inline-block w-1/2 ml-20 mt-10 px-10 py-4 rounded-2xl backdrop-filter backdrop-blur bg-opacity-25  border border-gray-500">
            <h2 className="px-4 text-xl pb-2"><b>Experience</b></h2>
          <section id="Experience" className="px-4 py-2 border border-gray-500 rounded-2xl">
            <div>
              {Jobs()}
            </div>
          </section>
          <h2 className="px-4 text-xl pb-2 mt-4"><b>Education</b></h2>
          <section id="Education" className="px-4 py-2 border border-gray-500 rounded-2xl">
            <div>
              {Education()}
            </div>
          </section>
              <h2 className="px-4 text-xl pb-2 mt-4"><b>Skills</b></h2>
          <section id="skills" className=" px-4 py-2 border border-gray-500 rounded-2xl">
            <div>
              {Skills()}
            </div>
          </section>
            <h2 className="px-4 text-xl pb-2 mt-4"><b>Interests</b></h2>
          <section id="Interests" className="px-4 py-2 border border-gray-500 rounded-2xl">
            {Interests()}
          </section>
        </div>

        <div id="fotka" className="w-2/6 mt-10 mx-20 rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25 border border-gray-500">
          <img src={Person.img} alt={Name} className="min-w-full rounded-2xl" />
        </div>
      </div>
      
      <div className="mx-20 mt-8 px-8 py-4 rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25 border border-gray-500" id="contanct-form">
        Contact form - Under construction...
      </div>
    </div>
  )
}

export default CV
