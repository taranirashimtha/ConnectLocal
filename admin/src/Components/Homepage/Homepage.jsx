import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import m1 from '../assets/about-banner.png';

const HomePage = () => {
    return (
        <div className="container">
            <div className="left-section">
                <h1>Admin Dashboard - Manage Your Community and Service Providers with Ease</h1>
                <p className="quote">Grow your business, connect with your community, and thrive together.</p>
                <div className="buttons-container">
                <div className="buttons">
                    <Link to={'/addproduct'} >
                    Add a  Service Provider
                    </Link>
                </div> 
                <div className="buttons">
                    <Link to={'/listproduct'} >
                     Remove Service Providers
                    </Link>
                </div>
                </div>
            </div>
            <div className="right-section">
                <img src={m1} alt="Service 1" className="side-image" />
                {/* <img src= {b1}alt="Service 2" className="side-image" />
                <img src={c1} alt="Service 3" className="side-image" /> */}
            </div>
        </div>
    );
};

export default HomePage;
