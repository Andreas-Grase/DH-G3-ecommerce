import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./style.css";

const NavbarHome = () => {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Navbar.Brand href="/dashboard"><i class="fas fa-cog"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/contato">Contato</Nav.Link>
          <Nav.Link href="/sobre">Sobre</Nav.Link>
          <Nav.Link href="/produtos">Produtos</Nav.Link>
          <Nav.Link href="/marcas">Marcas</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Barbearia</NavDropdown.Item>
            <NavDropdown.Item href="/">Cabelo</NavDropdown.Item>
            <NavDropdown.Item href="/">Lançamentos</NavDropdown.Item>
            <NavDropdown.Item href="/">Pele</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Unhas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline size="sm">
          {/* <FormControl type="text" placeholder="Produtos" className="mr-sm-2" /> */}
          <Button href="/login" variant="outline-light" className="button">Entrar na conta</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarHome;
