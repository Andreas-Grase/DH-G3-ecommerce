import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import "./style.css";

const ModalDeletar = ({ product }) => {
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Deseja deletar o produto ${product.nome} de id ${product.id}?`}</ModalHeader>
      <ModalFooter>
        <Button
          id="buttonNAV"
          className="btn btn-primary"
          href="/dashboard/produto/deletar/:id"
        >
          Sim
        </Button>
        <Button id="buttonNAV" className="btn btn-secondary" href="/dashboard">
          Não
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDeletar;
