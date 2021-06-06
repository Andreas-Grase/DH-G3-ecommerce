import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import "./style.css";

const ModalDeletar = ({ usuarios }) => {
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Deseja deletar o produto ${usuarios.primeiro_nome} de id ${usuarios.id}?`}</ModalHeader>
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
