import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Spa.css'

const Spa = () => {
    return (
        <div className='spa '>
          
       <div className='row m-auto'>
       <div className='col-md-7 text-start p-5 mt-5'> 
            <h4>A Nature’s Touch</h4>
           <h1>100% Original & Organic Skin Care Product</h1>
           <h4>Benefits of a Skin Care Routine</h4>
            <h5><li>It can slow down the signs of aging.</li>
            <li>Once it is established, it is easier to maintain.</li>
            <li>It boosts confidence – when you look good, you feel good.</li>
            <li>It keeps the skin healthy, which in turn keeps you healthier.</li>
            <li>Results can be dramatic if you stick with it.</li></h5>
            <br />
            <Link to="/skincares"><Button style={{backgroundColor: "#ee2d7a", borderRadius:20}} size="lg">Explore Skincare Product</Button></Link>

            </div>

            <div className='col-md-7 text-start p-5'> 

            </div>
       </div>
          
          
          

        </div>
    );
};

export default Spa;