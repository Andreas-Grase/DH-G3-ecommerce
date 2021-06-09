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
      <Navbar.Brand href="#">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Produtos</Nav.Link>
          <Nav.Link href="/dashboard/produto/listar">Usuários</Nav.Link>
          {/* <Nav.Link href="/dashboard/produto/ver/:id">Ver Produtos</Nav.Link>
          <NavDropdown title="Funções" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashboard/produto/adicionar">Adicionar</NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/produto/deletar/:id">
              Deletar
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/produto/atualizar/:id">Atualizar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline size="sm">
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
          <Button style={{height:"38px"}} id="buttonNAV">Produtos</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDashboard;
