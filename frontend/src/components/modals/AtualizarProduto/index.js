import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "react-bootstrap";
import {
  FormGroup,
  Input,
  Label, Modal,
  ModalBody,
  ModalFooter, ModalHeader
} from "reactstrap";
import "./style.css";

const ModalAtualizar = ({product}) => {
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Atualizar produto ${product.nome} de id ${product.id}`}</ModalHeader>
      <ModalBody>
      <FormGroup>
          <Label htmlFor="password">Produto:</Label>
          <Input type="text" id="categoria" value={product.nome} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Categoria:</Label>
          <Input type="text" id="categoria" value={product.categoria} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Estoque:</Label>
          <Input type="text" id="estoque" value={product.estoque} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Preço:</Label>
          <Input type="text" id="preco" value={product.preco} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button id="buttonNAV" className="btn btn-primary" href="/dashboard/produto/Atualizar/:id">
          Atualizar
        </Button>
        <Button id="buttonNAV" className="btn btn-secondary" href="/dashboard">
          Sair
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAtualizar;
