import React from 'react'

function CV(id) {
  var json = require('./lang/CV/en.json')
  const Person = json[parseInt(id['id']) - 1]
  console.log(Person)
  var Meno = Person['name']
  var Age = Person['age']

  function Jobs() { //mapping Person's Jobs in json and pushing it to div
    return (Person['experience'].map((Job) => {
      return <> <div>{Job.name}</div><div>{Job.company}</div><div>{Job.start} - {Job.end}</div></>
    }))
  }
  
  function Education(){    //mapping Person's Education in json and pushing it to div
    return (Person['education'].map((School) => {
      return <> <div>{School.name}</div><div>{School.adress}</div><div>{School.start} - {School.end}</div></>
    }))
  }

  function Skills(){
    return (Person['skills'].map((skill) => {
      return <>{skill} <br></br></>
  }))
  }

  function Interests(){
    return (Person['interests'].map((interest) => {
      return <>{interest} <br></br></>
  }))
  }

  return (
    <div>
      <section id="about">
        <div>
          <h1>{Meno}</h1>
          <h3>{Age}</h3>
        </div>
      </section>
      <section id="Experience">
        <h2>Experience</h2>
        <div>        
          {Jobs()}
        </div>
      </section>
      <section id = "Education">
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
