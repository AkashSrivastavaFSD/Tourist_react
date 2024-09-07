import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {Button,Spacer } from '@chakra-ui/react';


function Usernav({ setRole }) {
  const navigate= useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setRole(null); // Reset role to null
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
        <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="" className="navbar-brand p-0">
          <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/user/index" className="nav-item nav-link active">Home</Link>
            <Link to="/user/about" className="nav-item nav-link">About</Link>
            <Link to="/user/service" className="nav-item nav-link">Services</Link>
            <Link to="/user/bookmytour" className="nav-item nav-link">Book Tour</Link> 
              <Link to="/user/contact" className="nav-item nav-link">Contact</Link>
            <Link to="/user/setting" className="nav-item nav-link">Settings</Link>
            <Link to="/user/mybooking" className="nav-item nav-link">My Bookings</Link>
            <Spacer />
           
            <Link to="/login" className="nav-item nav-link" onClick={handleLogout}>
              Logout
            </Link> 
            {/*<Button colorScheme="red" variant="solid" onClick={handleLogout}>
          Logout
        </Button>*/}
            <div/>
          </div>
        </div>
      </nav>
    </div>
        </div>
  )};

  export default Usernav;
  
  
