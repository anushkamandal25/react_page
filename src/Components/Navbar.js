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
                <a className="nav-link" href="https://react-weather-48i.pages.dev/" target="_blank" >WEATHER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://108b2e64.react-todo-list-9bs.pages.dev/" target="_blank" >TO-DO LIST</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>


     </>
  )
}