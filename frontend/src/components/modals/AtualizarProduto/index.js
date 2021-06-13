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

const ModalAtualizar = ({ produtos, handleSuccess }) => {
  const [id] = produtos.id;
  const [nome, setNome] = useState(produtos.nome);
  const [marca, setMarca] = useState(produtos.marca);
  const [quantidade, setQuantidade] = useState(produtos.quantidade);
  const [preco, setPreco] = useState(produtos.preco);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/produtos/${id}`, {
        nome,
        marca,
        quantidade,
        preco,
      });
      handleSuccess();
      console.log(response);
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
              <Label htmlFor="nome">Produto:</Label>
              <Input
                type="text"
                name="nome"
                id="nome"
                required
                placeholder="Nome Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="marca">Marca:</Label>
              <Input
                type="text"
                name="marca"
                id="marca"
                required
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="quantidade">Quantidade:</Label>
              <Input
                type="text"
                name="quantidade"
                id="quantidade"
                required
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="preco">Preço:</Label>
              <Input
                type="text"
                name="preco"
                id="preco"
                required
                placeholder="Preco"
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
