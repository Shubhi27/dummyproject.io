import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const navbar=()=>{
    return(
        <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Intro</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Services</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}
export default navbar;