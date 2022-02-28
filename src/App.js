
import './App.css';
import React, { useState } from 'react';



import Navbar from "./Components/Navbar";
//import Introduction from "./Components/Introduction";

//for modal
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';





import Footer from "./Components/Footer";

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';




import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
}



function App() {
  return (
    <>
    <Navbar title=" CCA "/>
    {/*<Introduction />*/}
    {/*<Carousels />*/}
    {/*<Cards />*/}
   
  

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

<br></br>
<Card>
  <Card.Header><h1>CENTRE FOR COGNITIVE ACTIVITIES</h1>
      <h2>FIVE CELLS:</h2></Card.Header>
</Card>



    <div style={{ display: 'block', width: 700, padding: 30 }}>
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

    <Card>
  <Card.Header><h2>OUR FESTS</h2></Card.Header>
</Card>
<br />
<br />
    <div style={{ display: 'flex', width: 300, padding: 2}}>
    <Card>
    <Card.Img variant="top" src={require('./pic/ar20.jpeg')} />
  </Card>
  <br />
  <Card>
    <Card.Img variant="bottom" src={require('./pic/ar21.jpeg')} />
  </Card>
  <br />
  <Card>
    <Card.Img variant="bottom" src={require('./pic/ar22.jpeg')} />
  </Card>
  </div>
  <br />
  <br />

<Card>
  <Card.Header><h2>JOIN US</h2>
      <h3>We are hiring!</h3></Card.Header>
</Card>

<br />
  <br />

  <>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingContactCustom"
      type="number"
      placeholder="Enter your contact number"
    />
    <label htmlFor="floatingPasswordCustom">Contact Number</label>
  </Form.Floating>
  <br />
  <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  <br />
  <br />
</>


<Button variant="primary" onClick={handleShow}>
        Submit
</Button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
>
  <Modal.Header closeButton>
  <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
            Close
  </Button>
  <Button variant="primary">Understood</Button>
  </Modal.Footer>
  </Modal>
    
    


    <Footer />
    </>
  );
}

render(<Example />);

export default App;
