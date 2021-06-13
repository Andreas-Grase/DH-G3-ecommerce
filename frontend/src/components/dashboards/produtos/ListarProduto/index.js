import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import ModalVer from "../../../../components/modals/VerProduto"
import ModalAtualizar from "../../../../components/modals/AtualizarProduto";
import ModalDeletar from "../../../../components/modals/DeletarProduto";
import "./style.css";

const ListarProduto = () => {
  const [isModalVerVisible, setIsModalVerVisible] = useState(false);
  const [isModalAtualizarVisible, setIsModalAtualizarVisible] = useState(false);
  const [isModalDeletarVisible, setIsModalDeletarVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [produtos, setProdutos] = useState([]);

  const openModalVer = (id, nome, marca, quantidade, preco) => {
    setIsModalVerVisible(true);
    setSelectedProduct({ id, nome, marca, quantidade, preco });
  };

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
  const handleViewSuccess = () => {
    setIsModalVerVisible(false);
    getData();
  };
  const handleDeleteSuccess = () => {
    setIsModalDeletarVisible(false);
    getData();
  };
  const handleUpdateSuccess = () => {
    setIsModalAtualizarVisible(false);
    getData();
  };
  return (
    <div style={{ width: "80%", margin: "5px" }}>
      {isModalVerVisible ? (
        <ModalVer
          produtos={selectedProduct}
          handleSuccess={handleViewSuccess}
        />
      ) : null}
      {isModalAtualizarVisible ? (
        <ModalAtualizar
          produtos={selectedProduct}
          handleSuccess={handleUpdateSuccess}
        />
      ) : null}
      {isModalDeletarVisible ? (
        <ModalDeletar
          produtos={selectedProduct}
          handleSuccess={handleDeleteSuccess}
        />
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
              <th className="user__btn_eye" scope="col">
                Ver
              </th>
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
              <tr className="colunas" key={idx} id={`produto${produto.id}`}>
                <td scope="row">{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.marca}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.preco}</td>
                <td>{produto.id_categoria}</td>
                <td className="user__btn_eye">
                  <div className="btn-wrapper">
                    <button
                      onClick={() =>
                        openModalVer(
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
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
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
