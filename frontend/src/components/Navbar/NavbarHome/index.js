import {
  Button, Form, Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import "./style.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

export default class NavbarHome extends React.Component {

  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {

    return (
      <Navbar className="navbar" variant="dark" expand="lg">
        {/* Botão de Configuração na Home para abrir Modal pra Cadastro de Administrador   */}
        <button onClick={this.abrirModal} className="boton-administrador"><i className="fas fa-cog"></i></button>
        {/* Modal pra Cadastro de Administrador   */}
        <Modal isOpen={this.state.abierto}>
            <ModalHeader>
              Iniciar Sessão como Administrador
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="usuario">Usuário:</Label>
                <Input type="text" id="usuario" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Senha:</Label>
                <Input type="text" id="password" />
              </FormGroup>
              <FormGroup>
              <div className="lembrar">
                <input type="checkbox" className="ml-1" />
                <label for="customCheck" className="ml-2">Lembrar usuário</label>
                </div>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button id="buttonNAV" className="btn btn-primary" href="/produtos/dashboard">Entrar</Button>
              <Button id="buttonNAV" className="btn btn-secondary" onClick={this.abrirModal}>Sair</Button>
            </ModalFooter>
            <div>
              <p className="forgot-password text-right mr-3">Esqueceu sua senha?<a href="#">&nbsp;Clique aqui</a></p>
            </div>
        </Modal>
        {/* Fim do Modal pra Cadastro de Administrador   */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/marcas">Marcas</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categorias/barbearia">Barbearia</NavDropdown.Item>
              <NavDropdown.Item href="/categorias/cabelo">Cabelo</NavDropdown.Item>
              <NavDropdown.Item href="/categorias/lacamentos">Lançamentos</NavDropdown.Item>
              <NavDropdown.Item href="/categorias/pele">Pele</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categorias/unha">Unhas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline size="sm">
            {/* <FormControl type="text" placeholder="Produtos" className="mr-sm-2" /> */}
            <Button href="/login" id="buttonNAV">Entrar na conta</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

