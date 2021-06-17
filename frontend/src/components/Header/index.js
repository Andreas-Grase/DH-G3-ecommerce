import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-nome.svg";
import { removeToken, getToken } from "../../helpers/session";
import "./style.css";

const Header = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(getToken);
  }, []);
  const handleLogout = () => {
    removeToken();
  };
  return (
    <nav id="navbar__container">
      <div id="header__nav">
        <div id="container">
          <div id="header__name">
            <Link exact to="/">
              <img id="header-logo" src={logo} alt="Logo-Kabellos" />
            </Link>
          </div>
          <div id="search__box">
            <input type="search" placeholder="Procure seus produtos" />
            <span class="fa fa-search"></span>
          </div>
          <div id="right__menu">
            <div id="header__login">
              <div id="header__saudacao">Olá, visitante</div>
              <a id="header__login__link" href="/cadastro">
                Cadastre-se
              </a>
              {token ? (
                <a id="header__login__link" onClick={handleLogout} href="#">
                  Sair
                </a>
              ) : null}
            </div>
            <Link to="/shopping__cart" id="shopping__cart">
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
