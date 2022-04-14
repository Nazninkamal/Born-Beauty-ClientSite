import React from 'react';
import Banner from '../Banner/Banner';
import BeautyEssentials from '../BeautyEssentials/BeautyEssentials';
import BrowseProduct from '../BrowseProduct/BrowseProduct';
import HarbalProduct from '../HarbalProduct/HarbalProduct';
import Makeup from '../Makeup/Makeup';
import Spa from '../Spa/Spa';

import Video from '../Video/Video';

const Home = () => {
    return (
    
            <div>
           
        
        <Banner></Banner>
        <BeautyEssentials></BeautyEssentials>
        <BrowseProduct></BrowseProduct>
        <HarbalProduct></HarbalProduct>
        <Video/>
        <Spa></Spa> 
        <Makeup/>
       
      
    
        </div>
    );
};

export default Home;