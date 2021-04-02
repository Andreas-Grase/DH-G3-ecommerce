import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from './components/Header';
import NavbarHome from './components/Navbar/NavbarHome';
import NavbarLogin from './components/Navbar/NavbarLogin';
import NavbarDashboard from './components/Navbar/NavbarDashboard';
import Footer from './components/Footer';

const path = require('path')

ReactDOM.render(
  <Router>
    {
      path !== '/login'? (
        <>
          <Header />
          <NavbarHome /> 
        </>) : null
    }
    <Routes />
    {
      path !== 'login'? <Footer /> : null
    }
  </Router>,
  document.getElementById('root')
);