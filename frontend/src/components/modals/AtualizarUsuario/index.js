import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import produtomarca1 from "../../../assets/img/marcas/produtomarca1.png";
import "./style.css";

const ModalAtualizar = ({ usuarios, handleSuccess }) => {
  const id = usuarios.id;
  const [primeiro_nome, setPrimeiro_nome] = useState(usuarios.primeiro_nome);
  const [sobrenome, setSobrenome] = useState(usuarios.sobrenome);
  const [email, setEmail] = useState(usuarios.email);
  const [senha, setSenha] = useState(usuarios.senha);
  const [cpf, setCpf] = useState(usuarios.cpf);
  const [aniversario, setAniversario] = useState(usuarios.aniversario);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/usuarios/${id}`, {
        primeiro_nome,
        sobrenome,
        email,
        senha,
        cpf,
        aniversario,
      });
      handleSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Atualizar usuario ${usuarios.primeiro_nome} de id ${usuarios.id}`}</ModalHeader>
      <div className="modal-container">
        <div className="modal-body">
          <ModalBody>
            <FormGroup>
              <Label htmlFor="primeiro_nome">nome:</Label>
              <Input
                type="text"
                name="primeiro_nome"
                id="primeiro_nome"
                required
                placeholder="Seu nome"
                value={primeiro_nome}
                onChange={(e) => {
                  setPrimeiro_nome(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="sobrenome">sobrenome:</Label>
              <Input
                type="text"
                name="sobrenome"
                id="sobrenome"
                required
                placeholder="Seu sobrenome"
                value={sobrenome}
                onChange={(e) => {
                  setSobrenome(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cpf">CPF:</Label>
              <Input
                type="text"
                name="cpf"
                id="cpf"
                required
                placeholder="Seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="aniversario">Aniversario:</Label>
              <Input
                type="date"
                name="aniversario"
                id="aniversario"
                required
                placeholder="Seu aniversário"
                value={aniversario}
                onChange={(e) => setAniversario(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="senha">Senha:</Label>
              <Input
                type="password"
                name="senha"
                id="senha"
                required
                placeholde="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button
              id="buttonNAV"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Atualizar
            </Button>
            <Button
              id="buttonNAV"
              className="btn btn-secondary"
              onClick={handleSuccess}
            >
              Sair
            </Button>
          </ModalFooter>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAtualizar;
