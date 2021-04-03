import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from './components/Header';
import NavbarHome from './components/Navbar/NavbarHome';
import NavbarLogin from './components/Navbar/NavbarLogin';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import DashboardAdicionar from './pages/DashboardAdicionar';
import DashboardAtualizar from './pages/DashboardAtualizar';
import DashboardDeletar from './pages/DashboardDeletar';
import DashboardListar from './pages/DashboardListar';
import DashboardVer from './pages/DashboardVer';

let url = (window.location.href); //window.location.href originally instead of this
let object = new URL(url);
let path = object.pathname
console.log(path) 

ReactDOM.render(
  <Router forceRefresh>
    {
      path === '/login' || path === '/cadastro' ? (
        <>
          <NavbarLogin /> 
          <Routes />
        </>
      ) : null
    }
    {
      path === '/dashboard' ?
        <Dashboard /> : null
    }
    {
      path === '/dashboard/ver__produtos' ?
      <DashboardVer /> : null
    }
    {
      path === '/dashboard/listar__produtos' ?
      <DashboardListar /> : null
    }
    {
      path === '/dashboard/adicionar__produtos' ?
      <DashboardAdicionar /> : null
    }
    {
      path === '/dashboard/deletar__produtos' ?
      <DashboardDeletar /> : null
    }
    {
      path === '/dashboard/atualizar__produtos' ? 
      <DashboardAtualizar /> : null
    }
    {
      path !== '/login' && path !== '/cadastro' && path !== '/dashboard' && path !== '/dashboard/ver__produtos' && path !== '/dashboard/listar__produtos' && path !== '/dashboard/adicionar__produtos' && path !== '/dashboard/deletar__produtos' && path !== '/dashboard/atualizar__produtos'? (
        <>
          <Header />
          <NavbarHome /> 
          <Routes />
          <Footer />
        </>
      ) : null
    }
  </Router>,
  document.getElementById('root')
);