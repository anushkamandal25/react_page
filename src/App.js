import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Todo from "./Todo";
import Weather from "./Weather";
import Home from "./Home";





//import Navbar from "./Components/Navbar";
//import Introduction from "./Components/Introduction";




function App() {
 
  return (
    <>
    <div className="first_page">
    {/*<Navbar title=" CCA "/>*/}

    <Router>
      
    


    


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
              <Link className="nav-link" to="/Home"  >HOME</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Weather"  >WEATHER</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Todo"  >TODO</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>

    <div>
      <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Todo">
            <Todo />
          </Route>
          <Route exact path="/Weather">
            <Weather />
          </Route>
          <Route exact path="/" /> 
        </Switch>
      </div>

    </Router>

    </div>
    </>
  );
}


export default App;
