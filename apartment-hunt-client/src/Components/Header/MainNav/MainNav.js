import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import "./navbar.sass"

const MainNav = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="/home"><img className="img-fluid w-25 ml-5" src="https://i.ibb.co/Bwnjh7p/Logo.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className="text-nav mr-5 active"  href="#home">Home</Nav.Link>
                <Nav.Link className="text-nav mr-5" href="/#about">About</Nav.Link>
                <Nav.Link className="text-nav mr-5" href="#service">Service</Nav.Link>
                <Nav.Link className="text-nav mr-5" href="/#concerns">Concerns</Nav.Link>
                <Nav.Link className="text-nav mr-5" href="/#event">Event</Nav.Link>
                <Nav.Link className="text-nav mr-5" href="/#contact">Contact</Nav.Link>
                <Nav.Link  href="/login"> <button className="btn  mr-5">Login</button> </Nav.Link>
                </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default MainNav;