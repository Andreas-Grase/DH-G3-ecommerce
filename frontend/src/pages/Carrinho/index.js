import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Compras from "../../components/Compras";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./style.css";

const Carrinho = () => {
    return (
      <>
        <small>Este é o seu carrinho!</small>
        <Nav>
        <NavBtn>
          <NavBtnLink to="/shopping__cart/:finalizar__compras">Finalizar Compras</NavBtnLink>
        </NavBtn>
      </Nav>
      </>
    );
  };
  
  export default Carrinho;