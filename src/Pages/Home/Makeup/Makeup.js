import React from 'react';
import lipstick from "../../../image/makeup-product/lipstick.jfif"
import foundation from "../../../image/makeup-product/foundation.jfif"
import eyeliner from "../../../image/makeup-product/eyeliner.jfif"
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Makeup = () => {
    return (
        <div>
            <Container>
             <div className='my-5 d-flex flex-column align-items-center justify-content-center text-lg-start'>
            <h1>Makeup Essentials</h1>
           <div className='row my-5'>
           <div className='col-lg-4'>
                 <img src={lipstick} alt="" />
                 <h4>Lipstick</h4>
                 <h5>Starts from £18.00</h5>
            </div>
            <div className='col-lg-4'>
                 <img src={foundation} alt="" />
                 <h4>Foundation </h4>
                 <h5>Starts from £20.00</h5>
            </div>
            <div className='col-lg-4'>
                 <img src={eyeliner} alt="" />
                 <h4>Eyeliner</h4>
                 <h5>Starts from £15.00</h5>
            </div>
           </div>
           <Link to="/cosmetics"><Button style={{backgroundColor: "#ee2d7a", borderRadius:20}} size="lg">Explore More Makeup Product</Button></Link> 
        </div>
        </Container>
        </div>
    );
};

export default Makeup;