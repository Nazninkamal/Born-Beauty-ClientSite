import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../image/born-beauty logo.jpg'

const Header = () => {
    return (
            <div className='fixed-top'>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"> <img className='rounded-circle' src={logo} alt="" width="80" height="80"/> BORN BEAUTY</Navbar.Brand>
    <Nav className="me-auto">
   
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About</Nav.Link>
      <Nav.Link as={HashLink} to="/collections">Collections</Nav.Link>
      <Nav.Link href="#shop">Shop</Nav.Link>
      <Nav.Link href="#shop">Brand</Nav.Link>
      <Nav.Link href="#shop">News</Nav.Link>
      <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
</div>
       
    );
};

export default Header;