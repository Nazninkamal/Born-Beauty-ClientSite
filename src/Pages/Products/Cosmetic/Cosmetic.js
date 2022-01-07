import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cosmetic = ({cosmetic}) => {
    const {id, name, img, price} = cosmetic;

    return (
        <div >
        
        <Card className = "mx-4 rounded-3 my-5" style={{ width: '22rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body className="text-xl-start">
     <h5>{name}</h5>
     <h5>Starts from £{price}</h5> 
     
     
     <br />
     <Link to= "/purchase"><button className="btn btn-warning">Purchase</button></Link>

      
    </Card.Body>
  </Card>
        </div>
    );
};

export default Cosmetic;