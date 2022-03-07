//import React from 'react';
import './App.css';
import React, { useState } from 'react';
  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Todo from "./Todo";
import Weather from "./Weather";





//import Navbar from "./Components/Navbar";
//import Introduction from "./Components/Introduction";

import Footer from "./Components/Footer";

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


//for modal
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';


import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'



  





function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/*<Navbar title=" CCA "/>*/}

    <Router>
      <div>
      <Switch>
          <Route exact path="/Todo">
            <Todo />
          </Route>
          <Route exact path="/Weather">
            <Weather />
          </Route>
          <Route exact path="/" /> 
        </Switch>
      </div>
    


    


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
              <Link className="nav-link" to="/Weather" target="_blank" >WEATHER</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Todo" target="_blank" >TODO</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    
    

    {/*<Introduction />*/}
    {/*<Carousels />*/}
    {/*<Cards />*/}

    
   <br />
   <br />
  
   <div class="container mt-5 ">
    <Card>
  <Card.Header><h2>Hello! I am Anushka Mandal.</h2></Card.Header>
  <Card.Img variant="left" src={require('./pic/intro.jpeg')} width="200" height="200" />
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> 
        {' '}
        <i>Welcome to the of page of CCA,the technical gymkhana of NIT Durgapur.</i>
        <br></br>
I will be guiding you on the information and activities related to the club.{' '}
      </p>
    </blockquote>
  </Card.Body>
</Card>
</div>

<br></br>
<Card className="card d-flex container mt-5" >
  <Card.Header><h1>CENTRE FOR COGNITIVE ACTIVITIES</h1>
      <h2>FIVE CELLS:</h2></Card.Header>
</Card>



    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic/core.jpeg')}
      alt="CORE CELL" height="700" weight="400"
    />
    <Carousel.Caption>
      <h5>Core Cell</h5>
      <p><em>"Management is doing things right; Leadership is doing right things."- Peter Drucker Motivating, along with leading is a task well known by these robust people. Engaged throughout the year, working behind the scenes,the core cell excels in cooperating with the other cells to get things done.</em></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic/wdct.jpeg')}
      alt="WDCT CeLL" height="700" weight="400"
    />
    <Carousel.Caption>
    <h5>Web, Design And Creative Team</h5>
              <p>A congregation of enthusiastic techno-crats, we manage the technical aspects of the club, to keep it up and running in the cyber front. From designing websites for fests to organising workshops for amateurs, we nurture the creative spurt in the club.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic/ecell.jpeg')}
      alt="E-CeLL" height="700" weight="400"
    />

    <Carousel.Caption>
    <h5>Entrepreneurship Cell</h5>
              <p>Our mission is incubation of entrepreneurial bent among mind of fellow NITD'ians and hence to create future leaders. We aim to imbue spirit of entrepreneurship among student community, & to inspire and encourage them to take entrepreneurial challenge</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic/robo.jpeg')}
      alt="ROBO CELL" height="700" weight="400"
    />

    <Carousel.Caption>
    <h5 >Robo Cell</h5>
              <p>To keep pace with the lightning speed at which the rest of the world is producing advances in robotics, we at Robo Cell, try to inculcate, nurture and support the spirit of robot-making from a rudimentary level to expertise.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./pic/rnd.jpeg')}
      alt="RnD CELL" height="700" weight="400"
    />
    <Carousel.Caption>
    <h5 className="rnd" >Research and Development Cell</h5>
              <p className="rnd"  >Research and Development (RnD) flourishes where young minds and experienced faculties work synergistically. RnD Cell has been established to promote and monitor the research Programs of the institute. The cell administers all the research Programs of the university by monitoring and coordinating the research Programs.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>

    <br />
    <br />
    <br />

<Card className="card d-flex container mt-5" id="cards">
  <Card.Header><h2>OUR FESTS</h2></Card.Header>
</Card>
<br />
<br />
    <div className="d-flex row p-5 mr-1 mx-auto" >
    <Card className="card1">
    <Card.Img variant="top" src={require('./pic/ar20.jpeg')} />
  </Card>
  <br />
  <Card className="card1">
    <Card.Img variant="bottom" src={require('./pic/ar21.jpeg')} />
  </Card>
  <br />
  <Card className="card1">
    <Card.Img variant="bottom" src={require('./pic/ar22.jpeg')} />
  </Card>
  </div>
  <br />
  <br />

<Card  className="container mt-5">
  <Card.Header ><h2>JOIN US</h2>
      <h3>We are hiring!</h3></Card.Header>
</Card>

<br />
  <br />

  <>
  <Form.Floating className="container mt-5">
    <Form.Control
      id="floatingInputCustom"
      name="email" class="email form-control"
      type="email"
      placeholder="name@example.com"
    />
    
    <label htmlFor="floatingInputCustom">Email address</label>
  
  </Form.Floating >
  <Form.Floating className="container mt-5">
    <Form.Control
      id="floatingContactCustom"
      type="number"
      placeholder="Enter your contact number"
    />
    <label htmlFor="floatingPasswordCustom">Contact Number</label>
  </Form.Floating>
  <br />
  <Form.Select aria-label="Default select example" className="container mt-5 form-select form-select-md mb-3 d-block my-5 mx-auto " aria-label=".form-select-md example" id="myYear">
  <option>Mention Your Current Year</option>
  <option value="1">1st</option>
  <option value="2">2nd</option>
  <option value="3">3rd</option>
  <option value="3">4th</option>
</Form.Select>


 
</>


<Button type="button" className="btn btn-primary btn-lg d-block my-5 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal" variant="primary" onClick={handleShow}>
        Submit
</Button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
>
  <Modal.Header closeButton>
  <Modal.Title>SUCCESSFUL!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Thank you for registering! We will reach out to you soon.
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
            Close
  </Button>
  <Button variant="primary" >Okay</Button>
  </Modal.Footer>
  </Modal>
    
    


    <Footer />
    </Router>
    </>
  );
}


export default App;
