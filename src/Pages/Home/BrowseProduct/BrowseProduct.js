import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BrowseProduct.css';
const BrowseProduct = () => {
    return (
        <div className='browse'>
            <div className='my-5 text-center '>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <h3 className='mt-5'>A Nature's Touch</h3>
                <h1>Get 20% Off</h1>
                <h1>on all Cosmetic</h1> 
                <h1>Cream Packs</h1>
                <Link to="/cosmetics"><Button variant="secondary" size="lg">Browse Products</Button></Link>
        
            <br />
            <br />
            <br />
             <br />
             <br />
             <br />
            <br />
            <br />
             <br />
             <br />
            
            </div>
        </div>
    );
};

export default BrowseProduct;