import React from 'react';
import lotion from "../../../image/products/lotion.png"
import serum from "../../../image/products/serum.png"
import cream from "../../../image/products/psdfebcosmetic-3-4377.png"
import { Col, Container, Row } from 'react-bootstrap';


const HarbalProduct = () => {
    return (
        <div className='my-5 '>
         <Container>

                <Row className=' '>
                    <Col  lg={6} md={6} sm={12} xs={12}>
                        <h4>Traditional Methods</h4>
                        <br />
                        <h1>Herbal Body Lotion</h1>
                        <br />
                        <h5 className=''>All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</h5>
                        <br />
                        <h4>Starts from £18.00</h4>
                    </Col>
                    <Col  lg={6} md={6} sm={12} xs={12}>
                        <img className='img-fluid' src={lotion} alt="" />
                    </Col>
                </Row>

                <Row className=' my-5'>
                    <Col  lg={6} md={6} sm={12} xs={12}>
                        <img className='img-fluid' src={serum} alt="" />
                    </Col>
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                        <h4>Cosmetic Revolution</h4>
                        <br />
                        <h1>Organic Serium</h1>
                        <br />
                        <h5 className=''>All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</h5>
                        <br />
                        <h4>Starts from £35.00</h4>
                    </div>

                </Row>

                <Row className=' my-5 '>
                    <Col  lg={6} md={6} sm={12} xs={12}>
                        <h4>Physicians Formula</h4>
                        <br />
                        <h1>Herbal Face Cream</h1>
                        <br />
                        <h5 className=''>All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</h5>
                        <br />
                        <h4>Starts from £18.00</h4>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <img className='img-fluid' src={cream} alt="" />
                    </Col>
                </Row>
                </Container>
            </div>
       
    );
};

export default HarbalProduct;