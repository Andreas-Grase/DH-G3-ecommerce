import produtomarca1 from "../../../assets/img/marcas/produtomarca1.png";
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
import axios from "axios";
import "./style.css";

const ModalAtualizar = ({ product }) => {
  const [id, setId] = useState(product.id);
  const [nome, setNome] = useState(product.nome);
  const [categoria, setCategoria] = useState(product.categoria);
  const [estoque, setEstoque] = useState(product.estoque);
  const [preco, setPreco] = useState(product.preco);

  const handleUpdate = async () => {};
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Atualizar produto ${product.nome} de id ${product.id}`}</ModalHeader>
      <div className="modal-container">
        <div id="add-img">
          <img
            className="image-upload"
            src={produtomarca1}
            alt="produto-atualizado"
          />
          <button id="upload-btn">Upload</button>
        </div>
        <div className="modal-body">
          <ModalBody>
            <FormGroup>
              <Label htmlFor="password">Produto:</Label>
              <Input
                type="text"
                id="categoria"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Categoria:</Label>
              <Input
                type="text"
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Estoque:</Label>
              <Input
                type="text"
                id="estoque"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Preço:</Label>
              <Input
                type="text"
                id="preco"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
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
              href="/dashboard"
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
