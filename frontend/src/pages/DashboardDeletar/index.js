import Admin from "../templates/Admin";
import {
  Button, Form, Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

export class DashboardDeletar extends React.Component {

  state = {
    aberto: false,
  }

  abrirModal = () => {
    this.setState({ aberto: !this.state.aberto });
  }

  render() {

  return (
    <>
        {/* Modal pra Cadastro de Administrador   */}
        <Modal isOpen={this.state.aberto}>
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
              <Button className="btn btn-primary buttonNAV" href="/dashboard">Entrar</Button>
              <Button className="btn btn-secondary buttonNAV" onClick={this.abrirModal}>Sair</Button>
            </ModalFooter>
            <div>
              <p className="forgot-password text-right mr-3">Esqueceu sua senha?<a href="#">&nbsp;Clique aqui</a></p>
            </div>
        </Modal>
        {/* Fim do Modal pra Cadastro de Administrador   */}
    </>
  );
};
};

const template = () => (
  <Admin>
    <DashboardDeletar />
  </Admin>
);
export default template;
