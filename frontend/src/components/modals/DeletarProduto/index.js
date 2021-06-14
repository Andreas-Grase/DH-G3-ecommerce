import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import "./style.css";

const ModalDeletar = ({ produtos, handleSuccess }) => {
  const { id } = produtos;
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("entrou");
    try {
      const response = await axios.delete(
        `http://localhost:5000/produtos/${id}`
      );
      console.log(response.data);
      handleSuccess();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Deseja deletar o produto ${produtos.nome} de id ${produtos.id}?`}</ModalHeader>
      <ModalFooter>
        <form onSubmit={handleDelete}>
          <Button type="submit" id="buttonNAV" className="btn btn-primary">
            Sim
          </Button>
        </form>
        <Button id="buttonNAV" className="btn btn-secondary" onClick={handleSuccess}>
          Não
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDeletar;
