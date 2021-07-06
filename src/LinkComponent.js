import React from 'react'

function Link() {
  let id,desc;

  return (
    <>
      <div className="bg-white w-80 text-center mx-16 my-20 py-4 bg-clip-padding rounded-2xl backdrop-filter backdrop-blur-xl bg-opacity-25 border border-gray-200"><img src={id} alt={desc} /><p>Marek Kormoš:</p><p>Chalan zo Svitu</p><button className="border rounded-lg px-20 mt-4"><a href="ff">Show CV</a></button></div>
    </>
  )
}

export default Link
