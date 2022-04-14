import React from 'react';
import lotion from "../../../image/products/lotion.png"
import serum from "../../../image/products/serum.png"
import cream from "../../../image/products/psdfebcosmetic-3-4377.png"


const HarbalProduct = () => {
    return (
        <div className='my-5 '>
            <div className=''>

                <div className='row mx-5 my-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <h4>Traditional Methods</h4>
                        <br />
                        <h1>Herbal Body Lotion</h1>
                        <br />
                        <h5 className='text-justify'>All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</h5>
                        <br />
                        <h4>Starts from £18.00</h4>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='img-fluid' src={lotion} alt="" />
                    </div>
                </div>

                <div className='row mx-5 my-5'>
                    <div className='col-lg-7 col-md-7 col-sm-12'>
                        <img className='img-fluid' src={serum} alt="" />
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                        <h4>Cosmetic Revolution</h4>
                        <br />
                        <h1>Organic Serium</h1>
                        <br />
                        <h5 className='text-justify'>All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</h5>
                        <br />
                        <h4>Starts from £35.00</h4>
                    </div>

                </div>

                <div className='row mx-5 my-5 '>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                        <h4>Physicians Formula</h4>
                        <br />
                        <h1>Herbal Face Cream</h1>
                        <br />
                        <h5 className='text-justify'>All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</h5>
                        <br />
                        <h4>Starts from £18.00</h4>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='img-fluid' src={cream} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HarbalProduct;