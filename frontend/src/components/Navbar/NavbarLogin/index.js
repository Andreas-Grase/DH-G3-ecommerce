import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo-nome.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./style.css";

const NavbarLogin = () => {
  return (
    <>
      <Nav>
        <NavLink to="/"><img id="navbar-logo" src={logo}/></NavLink>
        {/* <Bars /> */}
        {/* <NavMenu>
          <NavLink id="coisa" exact to="/" activeStyle>Início</NavLink>
          <NavLink to="/sobre" activeStyle>Sobre</NavLink>
          <NavLink to="/categorias" activeStyle>Categorias</NavLink>
          <NavLink to="/marcas" activeStyle>Marcas</NavLink>
          <NavLink to="/produtos" activeStyle>Produtos</NavLink>
          <NavLink to="/promocoes" activeStyle>Promoções</NavLink>          
        </NavMenu> */}
          {/* 2nd Nav */}
          <NavBtn>
          <NavBtnLink to="/cadastro">Cadastre-se</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/login">Entrar na conta</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default NavbarLogin;
