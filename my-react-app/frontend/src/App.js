import './App.css';
import Header from './headercomponent/header';
import Footer from './footercomponent/footer';
import Nav from './navcomponent/nav';
import Usernav from './usernavcomponent/usernav';
import Adminnav from './adminnavcomponent/adminnav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
// Import all necessary components
import Index from './indexcomponent/index';
import About from './aboutcomponent/about';
import Booking from './bookingcomponent/booking';
import Contact from './contactcomponent/contact';
import Destination from './destinationcomponent/destination';
import Packages from './packagecomponent/package';
import Registration from './registrationcomponent/registration';
import Login from './logincomponent/login';
import Service from './servicecomponent/service';
import Team from './teamcomponent/team';
import Userteam from './userteamcomponent/userteam.js';
import Adminindex from './adminindexcomponent/adminindex';
import Userindex from './userindexcomponent/userindex';
import Manageuser from './manageusercomponent/manageuser.js';
import Userservice from './userservicecomponent/userservice';
import MyBookings from './userrmybookingcomponent/mybookings.js';
import Bookymytour from './booktourcomponent/bookmytour.js';
import Userabout from './useraboutcomponent/userabout';
import Usercontact from './usercontact/usercontact';
import Setting from './usersettingcomponent/setting.js';
import Payment from './paymentcomponent/payment.js';

function UserRoutes({ setRole }) {
  return (
    <>
      <Usernav setRole={setRole} />
      <Routes>
        <Route path="index" element={<Userindex />} />
        <Route path="about" element={<Userabout />} />
        <Route path="service" element={<Userservice />} />
        <Route path="mybooking" element={<MyBookings />} />
        <Route path="contact" element={<Usercontact />} />
        <Route path="setting" element={<Setting />} />
        <Route path="team" element={<Userteam />} />
        <Route path="bookmytour" element={<Bookymytour />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<Navigate to="/user/index" />} />
      </Routes>
    </>
  );
}

function AdminRoutes({ setRole }) {
  return (
    <>
      <Adminnav setRole={setRole} />
      <Routes>
        <Route path="index" element={<Adminindex />} />
        <Route path="manageuser" element={<Manageuser />} />
        <Route path="setting" element={<Setting />} />
        <Route path="*" element={<Navigate to="/admin/index" />} />
      </Routes>
    </>
  );
}

function App() {
  const [role, setRole] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear auth token or session data
    setRole(null); // Reset the role state to trigger re-render
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* Conditionally render the appropriate navigation */}
        {!role && <Nav />}
        {role === 'user' && <Usernav setRole={setRole} />}
        {role === 'admin' && <Adminnav setRole={setRole} />}
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/service" element={<Service />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login setRole={setRole} />} />

          {/* User Routes */}
          {role === 'user' && (
            <Route path="/user/*" element={<UserRoutes setRole={setRole} />} />
          )}

          {/* Admin Routes */}
          {role === 'admin' && (
            <Route path="/admin/*" element={<AdminRoutes setRole={setRole} />} />
          )}

          {/* Redirect to login if no role is set */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


