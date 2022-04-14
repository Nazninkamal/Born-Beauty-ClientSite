import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Skincare = ({service}) => {
    const {id, name, img, description} = service;
    return (
        <div >
        
        <Card className = "mx-4 rounded-3 my-5" style={{ width: '22rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body className="text-xl-start">
     <h5>{name}</h5>
      <p> {description}</p> 
     
     
     <br />
     <Link to= "/purchase"><Button style={{backgroundColor: "#ee2d7a", borderRadius:20}} size="lg">Purchase</Button></Link>

      
    </Card.Body>
  </Card>
        </div>
 
    );
};

export default Skincare;