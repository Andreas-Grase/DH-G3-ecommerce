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

const ModalAtualizar = ({ produtos }) => {
  const id = produtos.id;
  const [nome, setNome] = useState(produtos.nome);
  const [marca, setMarca] = useState(produtos.marca);
  const [quantidade, setQuantidade] = useState(produtos.quantidade);
  const [preco, setPreco] = useState(produtos.preco);

  const handleUpdate = async () => {
    try {
      const response = await axios.post(`/produtos/${id}`);
      handleUpdate(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Atualizar produto ${produtos.nome} de id ${produtos.id}`}</ModalHeader>
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
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Estoque:</Label>
              <Input
                type="text"
                id="estoque"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
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
