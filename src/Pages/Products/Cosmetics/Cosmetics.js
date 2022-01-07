import React, { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() =>{
        fetch('./cosmetics.json')
        .then(res => res.json())
        .then(data => setCosmetics(data));
    } ,[])
    return (
        <div id="services">
         
          <div className="service-container">
            {
                cosmetics.map(cosmetic =><Cosmetic
                    key = {cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
         
        </div>
      </div>
    );
};

export default Cosmetics;