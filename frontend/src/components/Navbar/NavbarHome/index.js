import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { removeToken, getToken } from "../../../helpers/session";


const NavbarHome = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(getToken);
  }, []);

  const [abrirModal, setAbrirModal] = useState(false)

  const handleSuccess = () => {
    setAbrirModal(false);
  };

    return (
      <Navbar className="navbar" variant="dark" expand="lg">
        {/* Botão de Configuração na Home para abrir Modal pra Cadastro de Administrador   */}
        <button onClick={setAbrirModal} className="boton-administrador">
          <i className="fas fa-cog"></i>
        </button>
        {/* Modal pra Cadastro de Administrador   */}
        <Modal isOpen={abrirModal}>
          <ModalHeader>Iniciar Sessão como Administrador</ModalHeader>
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
                <label for="customCheck" className="ml-2">
                  Lembrar usuário
                </label>
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              id="buttonNAV"
              className="btn btn-primary"
              href="/dashboard/produto/listar"
            >
              Entrar
            </Button>
            <Button
              id="buttonNAV"
              className="btn btn-secondary"
              onClick={handleSuccess}
            >
              Sair
            </Button>
          </ModalFooter>
          <div>
            <p className="forgot-password text-right mr-3">
              Esqueceu sua senha?<a href="#">&nbsp;Clique aqui</a>
            </p>
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
          </Nav>
          {!token ? (
          <Form inline size="sm">
            {/* <FormControl type="text" placeholder="Produtos" className="mr-sm-2" /> */}
            <Button href="/login" id="buttonNAV">
              Entrar na conta
            </Button>
          </Form>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarHome
