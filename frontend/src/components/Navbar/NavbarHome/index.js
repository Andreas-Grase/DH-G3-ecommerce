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
        <Bars />
        <NavMenu>
          <NavLink id="textdecorationinicio" exact to="/" activeStyle>Início</NavLink>
          <NavLink id="textdecorationsobre"  to="/sobre" activeStyle>Sobre</NavLink>
          <NavLink id="textdecorationcategorias"  to="/categorias" activeStyle>Categorias</NavLink>
          <NavLink id="textdecorationmarcas" to="/marcas" activeStyle>Marcas</NavLink>
          <NavLink id="textdecorationprodutos" to="/produtos" activeStyle>Produtos</NavLink>
          <NavLink id="textdecorationpromocoes" to="/promocoes" activeStyle>Promoções</NavLink>          
          {/* 2nd Nav */}
          {/* <NavBtn>
          <NavBtnLink to="/cadastre-se">Cadastre-se</NavBtnLink>
        </NavBtn> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Entrar na conta</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default NavbarHome;
