import React from 'react';
import { Button } from 'react-bootstrap';
// import { Button, Form, FormControl } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
           <div className='row banner mb-5 m-auto'>
           <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center text-lg-start p-5'>
              
              
             <h1 className='font'> Natural Way to Healthy Skin</h1>
             <p className='paragraph'>If your skin has been looking a little dry or dull and you’re starting to see early signs of aging, a single ingredient can help turn that around. As we age, our skin needs more hydration and more moisture because our naturally built-in skin moisturizers begin to diminish sometime in our late 20’s.</p>
             
           </div>
           <div className='col-lg-6 col-md-6 col-sm-12'>

           </div>
        
           </div>

        </div>
    );
};

export default Banner;