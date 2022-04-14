import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../image/born-beauty logo.jpg'
import './Header.css'

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
      <>
       <Navbar collapseOnSelect expand="lg" fixed='top'
            className={colorChange ? 'navbar1 colorChange' : 'navbar1'}>
        <Container>
          <Navbar.Brand href="#home">BORN BEAUTY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="HOME" id="basic-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/home#home"> Main Home</NavDropdown.Item>
               
              </NavDropdown>

              

              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/skincareaddservice"> Add Skin Care Product</NavDropdown.Item>
              
              </NavDropdown>

              <Nav.Link as={HashLink} to="/about">ABOUT</Nav.Link>
              <Nav.Link as={HashLink} to="/contact">CONTACT</Nav.Link>

             
              


            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
       
    );
};

export default Header;