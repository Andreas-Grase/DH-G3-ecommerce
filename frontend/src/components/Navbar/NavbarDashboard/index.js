import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from '../../../assets/icons/logo-nome.svg';

const NavbarDashboard = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          id="navbar-logo"  
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Listar Produtos</Nav.Link>
          <Nav.Link href="#link">Ver Produtos</Nav.Link>
          <NavDropdown title="Funções" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Adicionar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Deletar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Atualizar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline size="sm">
          <FormControl type="text" placeholder="Produtos" className="mr-sm-2" />
          <Button style={{height:"38px"}} variant="outline-info">Produtos</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDashboard;
