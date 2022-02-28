import React from 'react'

export default function header(props) {
  return (

    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">&nbsp; &nbsp; CCA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CELLS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FEST</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">JOIN US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="weather_time/weather.html" target="_blank" >WEATHER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ToDo/todo.html" target="_blank" >TO-DO LIST</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>



     <section>
            <div className="container mt-5 bg-light" />
                <div className="jumbotron bg-light"/>
                    <img className="float-start img-fluid me-3" src="./pic/intro.jpeg" className="rounded-circle" alt=""/>
                    <h2 className="display-4">Hello! I am Anushka Mandal.</h2>
                    <p className="lead"><i> Welcome to the of page of CCA,the technical gymkhana of NIT Durgapur.</i><br/>
                    I will be guiding you on the information and activities related to the club.</p>
                    <hr className="my-4"></hr>
     </section>

     </>
  )
}