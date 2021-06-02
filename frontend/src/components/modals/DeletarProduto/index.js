import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import "./style.css";

const ModalDeletar = ({ produtos }) => {
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Deseja deletar o produto ${produtos.nome} de id ${produtos.id}?`}</ModalHeader>
      <ModalFooter>
        <Button
          id="buttonNAV"
          className="btn btn-primary"
          href="/dashboard/produto/deletar/:id"
        >
          Sim
        </Button>
        <Button id="buttonNAV" className="btn btn-secondary" href="/produtos/dashboard">
          Não
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDeletar;
