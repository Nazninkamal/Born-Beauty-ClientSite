import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import notfound from '../../image/notfound-2.png'

const NotFound = () => {
    return (
        <div>
            <img style={{width:"1000px"}} src={notfound} alt="" />
            <Link to= "/home"><button className="btn btn-warning">Go Home</button></Link>
            
        </div>
    );
};

export default NotFound;