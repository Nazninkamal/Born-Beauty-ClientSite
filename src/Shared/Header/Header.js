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
          <Navbar.Brand href="#home" className='fs-3 fw-bold'>BORN BEAUTY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="HOME" id="basic-nav-dropdown" className='fw-bold'>
                <NavDropdown.Item as={HashLink} to="/home#home" className='fw-bold'> Main Home</NavDropdown.Item>
                
               
              </NavDropdown>

              

              <NavDropdown title="Pages" id="basic-nav-dropdown" className='fw-bold '>
                
                <NavDropdown.Item as={HashLink} to="/cosmetics" className='fw-bold'>Makeup Items</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/skincares" className='fw-bold'>SkinCare Items</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/skincareaddservice" className='fw-bold'> Add SkinCare Items</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/cosmeticsaddservice" className='fw-bold'> Add Makeup Items</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={HashLink} to="/about" className='fw-bold'>ABOUT</Nav.Link>
              <Nav.Link as={HashLink} to="/contact" className='fw-bold'>CONTACT</Nav.Link>

             
              


            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
       
    );
};

export default Header;