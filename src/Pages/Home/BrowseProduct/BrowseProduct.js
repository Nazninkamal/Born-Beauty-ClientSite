import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import makeup from '../../../image/makeup.png'
import './BrowseProduct.css';
const BrowseProduct = () => {
    return (
        <div className='browse '>
           <div className='row m-auto'>
           <div className='col-lg-7 col-md-7 col-sm-12  p-5'>
           <img src={makeup} alt="" width={"100%"}/>
             
           </div>
           <div className='col-lg-5 col-md-5 col-sm-12   d-flex flex-column  justify-content-center '>
             <h6 className='paragraph text-lg-start'>A Nature’s Touch</h6>
             <h1 className='text '>Get 20% Off <br /> on all Cosmetic Cream Packs</h1>
             <br />
             <Link to="/skincares"><Button style={{backgroundColor: "#ee2d7a", borderRadius:20}} size="lg">Browse Product</Button></Link>
           </div>
        
           </div>

        </div>
    );
};

export default BrowseProduct;