import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Skincare = ({service}) => {
    const {id, name, img, describe} = service;
    return (
        <div >
        
        <Card className = "mx-4 rounded-3 my-5" style={{ width: '22rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body className="text-xl-start">
     <h5>{name}</h5>
      <p> {describe}</p> 
     
     
     <br />
     <Link to= "/purchase"><button className="btn btn-warning">Purchase</button></Link>

      
    </Card.Body>
  </Card>
        </div>
 
    );
};

export default Skincare;