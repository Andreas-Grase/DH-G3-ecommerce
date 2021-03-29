import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./style.css";

const NavbarHome = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink exact to="/" activeStyle>Início</NavLink>
          <NavLink to="/sobre" activeStyle>Sobre</NavLink>
          <NavLink to="/contato" activeStyle>Contato</NavLink>
          <NavLink to="/categorias" activeStyle>Categorias</NavLink>
          <NavLink to="/marcas" activeStyle>Marcas</NavLink>
          <NavLink to="/produtos" activeStyle>Produtos</NavLink>
          <NavLink to="/promocoes" activeStyle>Promoções</NavLink>          
          {/* 2nd Nav */}
          {/* <NavBtn>
          <NavBtnLink to="/cadastre-se">Cadastre-se</NavBtnLink>
        </NavBtn> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/cadastre-se">Entrar na conta</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default NavbarHome;
