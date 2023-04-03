
import React, { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';

import Balance from './containers/Balance';
import Account from './containers/Account';
import Delete from './containers/Delete';
import Transactions from './containers/Transactions';

import Home from './containers/Home';
import Footer from './containers/Footer';
import { Login, Signup } from './containers/componentsAuth/Registration';
import QRCodeImage from './containers/QRCodeImage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    setIsAuthenticated(false);
    navigate('/login');
  }

  return (
    <div className='container'>
      <Navbar bg='dark' variant='dark' expand='lg' className='animate__animated animate__slideInDown'>
        <NavLink to='/home' className='navbar-brand'>
          Rbk Welcome
        </NavLink>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <NavLink to='/Balance' className='nav-link'>
              Users
            </NavLink>
            <NavLink to='/account' className='nav-link'>
              Account
            </NavLink>
            <NavLink to='/Delete' className='nav-link'>
              Update
            </NavLink>
            <NavLink to='/transactions' className='nav-link'>
              Transactions
            </NavLink>
           
            <NavLink to='/qr-code-image' className='nav-link'>
              QRCode Client
            </NavLink>
            {!isAuthenticated && (
              <>
                <NavLink to='/home' className='nav-link'>
                  Home
                </NavLink>
                <NavLink to='/login' className='nav-link'>
                  Login
                </NavLink>
                <NavLink to='/signup' className='nav-link'>
                  Signup
                </NavLink>
              </>
            )}
            {isAuthenticated && (
              <>
                <button onClick={handleLogout} className='nav-link'>
                  Logout
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/account" element={<Account />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/qr-code-image" element={<QRCodeImage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;