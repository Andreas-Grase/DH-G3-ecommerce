import logo from '../../../assets/icons/logo-nome.svg';
import {
  Nav,
  NavLink
} from "./NavbarElements";
import "./style.css";

const NavbarLogin = () => {
  return (
    <>
      <Nav>
        <NavLink to="/"><img id="navbar-logo" src={logo} alt="logo"/></NavLink>
      </Nav>
    </>
  );
};
export default NavbarLogin;
