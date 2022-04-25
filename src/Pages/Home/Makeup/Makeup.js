import React from 'react';
import lipstick from "../../../image/makeup-product/lipstick.png"
import foundation from "../../../image/makeup-product/foundation.png"
import eyeliner from "../../../image/makeup-product/eyeliner.png"
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Makeup = () => {
    return (
        <div>
            <Container>
             <div className='my-5 d-flex flex-column align-items-center justify-content-center '>
            <h1>Makeup Essentials</h1>
           <Row className=' my-5'>
           <Col lg={4} md={4} sm={4} xs={12}>
                 <img src={lipstick} alt=""  width={"100%"}/>
                 <h4>Lipstick</h4>
                 <h5>Starts from £18.00</h5>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
                 <img src={foundation} alt=""  width={"100%"}/>
                 <h4>Foundation </h4>
                 <h5>Starts from £20.00</h5>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
                 <img src={eyeliner} alt="" width={"100%"}/>
                 <h4>Eyeliner</h4>
                 <h5>Starts from £15.00</h5>
            </Col>
           </Row>
           <Link to="/cosmetics"><Button style={{backgroundColor: "#ee2d7a", borderRadius:20}} size="lg">Explore More Makeup Product</Button></Link> 
        </div>
        </Container>
        </div>
    );
};

export default Makeup;