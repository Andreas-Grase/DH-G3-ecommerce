import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import ModalAtualizar from "../../../../components/modals/AtualizarProduto";
import ModalDeletar from "../../../../components/modals/DeletarProduto";
import "./style.css";

const ListarProduto = () => {
  const [isModalAtualizarVisible, setIsModalAtualizarVisible] = useState(false);
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [produtos, setProdutos] = useState([]);

  const openModalAtualizar = (id, nome, marca, quantidade, preco) => {
    setIsModalAtualizarVisible(true);
    setSelectedProduct({ id, nome, marca, quantidade, preco });
  };

  const openModalDeletar = (id, nome) => {
    setIsModalDeletarVisible(true);
    setSelectedProduct({ id, nome });
  };
  const getData = async () => {
    try {
      const response = await axios.get("/produtos");
      setProdutos(response.data.produtos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios
    //   .get("/produtos")
    //   .then((res) => setData(res.data))
    //   .catch((error) => console.log(error));
    getData();
  }, []);
  const handleDeleteSuccess = () => {
    setIsModalDeletarVisible(false);
    getData();
  };
  return (
    <div style={{ width: "80%", margin: "5px" }}>
      {isModalAtualizarVisible ? (
        <ModalAtualizar produtos={selectedProduct} />
      ) : null}
      {isModalDeletarVisible ? (
        <ModalDeletar produtos={selectedProduct} handleSuccess={handleDeleteSuccess} />
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
              <th scope="col">Quantidade</th>
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
