import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../image/banner/banner1.png'
import banner2 from '../../../image/banner/banner2.png'
import banner3 from '../../../image/banner/banner3.png'


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={8000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className=''>
      <h3>Compelete cosmetics solution</h3>
      <p>Face Moisturers to Blushes</p>
      <Link to={`/allproduct`}><Button variant="primary">Explore Now</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={8000}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to={`/allproduct`}><Button variant="primary">Explore Now</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Praesenting perfect cosmetics</h3>
      <p>Beauty that is you.</p>
      <Link to={`/allproduct`}><Button variant="primary">Explore Now</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;