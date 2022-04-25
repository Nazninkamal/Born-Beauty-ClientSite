import React from 'react';
import one from '../../../image/essential/moisturizer.png'
import three from '../../../image/essential/sunscreen.png'
import two from '../../../image/essential/beauty.png'
import { Col, Container, Row } from 'react-bootstrap';



const BeautyEssentials = () => {
    return (
        <div className='my-5 '>
        <Container>
             <div className='d-flex flex-column align-items-center justify-content-center text-lg-start'>
             <h3>Nature's Touch</h3>
            <h1>Beauty Essentials</h1>
             </div>
            
           <Row className='my-5 '>
           <Col lg={4} md={4} sm={4} xs={12}>
                 <img src={one} alt=""  width={"100%"} height={"80%"}/>
                 <h4>Moisturizer</h4>
                 <h5>Starts from £18.00</h5>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
                 <img src={two} alt="" width={"100%"} height={"80%"} />
                 <h4>Beauty Cream </h4>
                 <h5>Starts from £20.00</h5>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
                 <img src={three} alt=""  width={"100%"} height={"80%"}/>
                 <h4>Sunscreen</h4>
                 <h5>Starts from £15.00</h5>
            </Col>
           </Row>
           </Container>
        </div>
    );
};

export default BeautyEssentials;