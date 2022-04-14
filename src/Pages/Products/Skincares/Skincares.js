import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Skincare from '../Skincare/Skincare';
import './Skincares.css'

const Skincares = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://young-inlet-53249.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])
    return (
        <div id="services">
         
          <div className="service-container">
            {
                services.map(service =><Skincare
                    key = {service.id}
                    service={service}
                ></Skincare>)
            }
         
        </div>
      </div>
    );
};

export default Skincares;