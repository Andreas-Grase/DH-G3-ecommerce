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
      <Navbar.Brand href="/">
        <img
          id="navbar-logo"  
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/dashboard">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/dashboard/listar__produtos">Listar Produtos</Nav.Link>
          <Nav.Link href="/dashboard/ver__produtos">Ver Produtos</Nav.Link>
          <NavDropdown title="Funções" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashboard/adicionar__produtos">Adicionar</NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/deletar__produtos">
              Deletar
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/atualizar__produtos">Atualizar</NavDropdown.Item>
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
