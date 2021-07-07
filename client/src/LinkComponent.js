import React from 'react'

function Link({ person }) {
  return (
    <>
      <div className="bg-white w-80 text-center mx-16 my-20 py-4 bg-clip-padding rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25 border border-gray-200">
        <img src={person.id} alt={person.desc} />
        <p>{person.name}:</p>
        <p>{person.desc}</p>
        <button className="border rounded-lg px-20 mt-4">
          <a href={'/en/' + person.url}>Show CV</a>
        </button>
      </div>
    </>
  )
}

export default Link
