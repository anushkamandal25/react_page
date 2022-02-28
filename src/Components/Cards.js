import React from 'react'

export default function Cards() {
  return (
    <section>
      <div className="container mt-5">
        <div className="jumbotron bg-light">
        <h2>OUR FESTS</h2>
        </div>

      </div>
      <div className="cards" id="cards">
        <div className="d-flex row p-5 mr-1 mx-auto">
          <div className="card" style="width: 33%;">
            <img src="/Users/anushkamandal/Documents/HTML/react/task/task/pic/ar20.jpeg" className="card-img" alt="..."/>
          </div>
          <div className="card" style="width: 33%;">
            <img src="/Users/anushkamandal/Documents/HTML/react/task/task/pic/ar21.jpeg" className="card-img" alt="..."/>
          </div>
          <div className="card" style="width: 33%;">
            <img src="/Users/anushkamandal/Documents/HTML/react/task/task/pic/ar22.jpeg" className="card-img" alt="..."/>
          </div>
        </div>
      </div> 
    </section>     
  )
}
