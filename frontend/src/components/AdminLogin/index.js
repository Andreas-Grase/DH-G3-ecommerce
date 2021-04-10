import React from 'react';
import { NavLink } from "react-router-dom"
import './style.css';

const AdminLogin = () => {
  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" autoComplete="off"/>
        </div>
        <br />
          <NavLink to="/dashboard" className="btn-continuar-admin">
                Entrar
          </NavLink>
     
      </form>
    </div>
  );
};

export default AdminLogin;