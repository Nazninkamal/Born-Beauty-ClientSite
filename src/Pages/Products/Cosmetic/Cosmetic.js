import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cosmetic = ({cosmetic}) => {
    const {id, name, img, price} = cosmetic;

    return (
        <div >
             
            <Container>
           
    <Card className = " rounded-3 my-5 py-5" style={{ width: '22rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body className="text-xl-start">
     <h5>{name}</h5>
     <h5>Starts from £{price}</h5> 
     
     
     <br />
     <Link to= "/purchase"><Button style={{backgroundColor: "#ee2d7a", borderRadius:5, border:"none", width:"30%", padding:10}}>Purchase</Button></Link>

      
    </Card.Body>
  </Card>
 </ Container>
        </div>
    );
};

export default Cosmetic;