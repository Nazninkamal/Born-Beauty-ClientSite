import React from 'react';
import one from '../../../image/essential/moisturizer.png'
import three from '../../../image/essential/sunscreen.png'
import two from '../../../image/essential/beauty.png'
import { Container } from 'react-bootstrap';



const BeautyEssentials = () => {
    return (
        <div className=''>
        <Container>
             <div className='d-flex flex-column align-items-center justify-content-center text-lg-start'>
             <h3>Nature's Touch</h3>
            <h1>Beauty Essentials</h1>
             </div>
            
           <div className='row my-5 mx-auto'>
           <div className='col-lg-4'>
                 <img src={one} alt="" />
                 <h4>Moisturizer</h4>
                 <h5>Starts from £18.00</h5>
            </div>
            <div className='col-lg-4'>
                 <img src={two} alt="" width={300} height={400} />
                 <h4>Beauty Cream </h4>
                 <h5>Starts from £20.00</h5>
            </div>
            <div className='col-lg-4'>
                 <img src={three} alt="" />
                 <h4>Sunscreen</h4>
                 <h5>Starts from £15.00</h5>
            </div>
           </div>
           </Container>
        </div>
    );
};

export default BeautyEssentials;