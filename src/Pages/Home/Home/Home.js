import React from 'react';
import Banner from '../Banner/Banner';
import BeautyEssentials from '../BeautyEssentials/BeautyEssentials';
import BrowseProduct from '../BrowseProduct/BrowseProduct';
import HarbalProduct from '../HarbalProduct/HarbalProduct';
import Spa from '../Spa/Spa';
import lipstick from "../../../image/makeup-product/lipstick.jfif"
import foundation from "../../../image/makeup-product/foundation.jfif"
import eyeliner from "../../../image/makeup-product/eyeliner.jfif"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
        
        <Banner></Banner>
        <BeautyEssentials></BeautyEssentials>
        <BrowseProduct></BrowseProduct>
        <HarbalProduct></HarbalProduct>
        <Spa></Spa>
       
     </div>
     <div className='my-5'>
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
           <Link to="/cosmetics"><Button variant="secondary" size="lg">Explore More Makeup Product</Button></Link>
        </div>
        </div>
    );
};

export default Home;