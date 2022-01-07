import React from 'react';
import one from '../../../image/essential/moisturizer.png'
import two from '../../../image/essential/sunscreen.png'
import three from '../../../image/essential/beauty.png'



const BeautyEssentials = () => {
    return (
        <div className='my-5'>
            <h3>Nature's Touch</h3>
            <h1>Beauty Essentials</h1>
           <div className='row my-5'>
           <div className='col-lg-4'>
                 <img src={one} alt="" />
                 <h4>Moisturizer</h4>
                 <h5>Starts from £18.00</h5>
            </div>
            <div className='col-lg-4'>
                 <img src={two} alt="" />
                 <h4>Beauty Cream </h4>
                 <h5>Starts from £20.00</h5>
            </div>
            <div className='col-lg-4'>
                 <img src={three} alt="" />
                 <h4>Sunscreen</h4>
                 <h5>Starts from £15.00</h5>
            </div>
           </div>
        </div>
    );
};

export default BeautyEssentials;