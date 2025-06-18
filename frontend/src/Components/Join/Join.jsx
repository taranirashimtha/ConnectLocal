import React from 'react';
import './Join.css';
import banner from  '../Assets/about-banner.png'
const JoinServiceProvider = () => {
  return (
    <div className="join-service-provider">
      <header className="header">
        
        <h1>CONNECT LOCAL</h1>
      </header>
      <div className="content">
        <div className="text">
          <h2>Want to Join as Service Provider</h2>
          <p>Contact Admin if you want to join as Service Provider.</p>
        </div>
        <div className="image">
          <img src={banner} alt="Service Provider" />
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <p><i className="fa fa-user"></i> admin_name</p>
        <p><i className="fa fa-phone"></i> +91 9347638886</p>
        <p><i className="fa fa-envelope"></i> admin@gmail.com</p>
      </div>
    </div>
  );
};

export default JoinServiceProvider;
