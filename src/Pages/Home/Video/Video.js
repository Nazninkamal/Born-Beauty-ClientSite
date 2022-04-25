
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Video = () => {
    return (
        <div className='py-5 '>
            <Container>
                <Row className=' m-auto py-5'>

                   <h3 className='my-5'>Doctors Answer Commonly Googled Questions About Skin Care</h3> 
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <iframe width="100%" height="300"  src="https://www.youtube.com/embed/YXjF6vcYUpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}  className='text-lg-start '>
                        <h3>Why is healthy skin important?</h3>
                        <h6> Since your skin plays such an important role in protecting your body, you should keep it as healthy as you can. This will help you keep from getting sick or having damage to your bones, muscles, and internal organs.Since your skin plays such an important role in protecting your body, you should keep it as healthy as you can. This will help you keep from getting sick or having damage to your bones, muscles, and internal organs.Since your skin plays such an important role in protecting your body, you should keep it as healthy as you can. This will help you keep from getting sick or having damage to your bones, muscles, and internal organs.</h6>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Video;