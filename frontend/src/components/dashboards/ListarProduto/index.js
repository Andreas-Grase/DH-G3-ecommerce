import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import ModalAtualizar from "../../../components/modals/AtualizarProduto";
import ModalDeletar from "../../../components/modals/DeletarProduto";
import "./style.css";

const ListarProduto = ({ produtos }) => {
  const [isModalAtualizarVisible, setIsModalAtualizarVisible] = useState(false);
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const openModalAtualizar = (id, nome, categoria, estoque, preco) => {
    setIsModalAtualizarVisible(true);
    setSelectedProduct({ id, nome, categoria, estoque, preco });
  };

  const openModalDeletar = (id, nome) => {
    setIsModalDeletarVisible(true);
    setSelectedProduct({ id, nome });
  };

  return (
    <div style={{ width: "80%", margin: "5px" }}>
      {isModalAtualizarVisible ? (
        <ModalAtualizar product={selectedProduct} />
      ) : null}
      {isModalDeletarVisible ? (
        <ModalDeletar product={selectedProduct} />
      ) : null}
      <div className="header-section">
        <div className="add-icon">
          <i class="fas fa-list-alt fa-2x" />
        </div>
        <h1 className="title">Lista de produtos</h1>
      </div>
      <div className="table-container">
        <table class="table table-striped">
          <thead>
            <tr className="colunas">
              <th scope="col">ID</th>
              <th scope="col">Produto</th>
              <th scope="col">Marca</th>
              <th scope="col">Qauntidade</th>
              <th scope="col">Preço</th>
              <th scope="col">id_categoria</th>
              <th scope="col" className="col-btn">
                Atualizar
              </th>
              <th scope="col" className="col-btn">
                Deletar
              </th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, idx) => (
              <tr id={`produto${produto.id}`}>
                <th scope="row">{produto.id}</th>
                <td>{produto.nome}</td>
                <td>{produto.marca}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.preco}</td>
                <td>{produto.id_categoria}</td>
                <td>
                  <div className="btn-wrapper">
                    <button
                      onClick={() =>
                        openModalAtualizar(
                          `${produto.id}`,
                          `${produto.nome}`,
                          `${produto.marca}`,
                          `${produto.quantidade}`,
                          `${produto.preco}`
                        )
                      }
                      type="btn"
                      className="btn-update"
                    >
                      <i class="fas fa-sync"></i>
                    </button>
                  </div>
                </td>
                <td>
                  <div className="btn-wrapper">
                    <button
                      onClick={() =>
                        openModalDeletar(`${produto.id}`, `${produto.nome}`)
                      }
                      type="btn"
                      className="btn-delete"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListarProduto;
