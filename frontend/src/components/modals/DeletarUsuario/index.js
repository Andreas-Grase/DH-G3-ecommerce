import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import "./style.css";

const ModalDeletar = ({ usuarios, handleSuccess }) => {
  const { id } = usuarios;
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      console.log("entrou");
      const response = await axios.delete(
        `http://localhost:5000/usuarios/${id}`
      );
      handleSuccess();
      console.log(response.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Deseja deletar o produto ${usuarios.primeiro_nome} de id ${usuarios.id}?`}</ModalHeader>
      <ModalFooter>
        <form onSubmit={handleDelete}>
          <Button type="submit" id="buttonNAV" className="btn btn-primary">
            Sim
          </Button>
        </form>
        <Button id="buttonNAV" className="btn btn-secondary">
          Não
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDeletar;
