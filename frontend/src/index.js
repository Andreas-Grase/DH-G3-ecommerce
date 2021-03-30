import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from './components/Header';
import NavbarHome from './components/Navbar/NavbarHome';
import Footer from './components/Footer';
import './index.css';


ReactDOM.render(
  <Router>
    <Header />
    <NavbarHome /> 
    <Routes />
   <Footer /> 
  </Router>,
  document.getElementById('root')
);
