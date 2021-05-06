import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import ModalAtualizar from "../../../components/modals/AtualizarProduto";
import ModalDeletar from "../../../components/modals/DeletarProduto";
import "./style.css";

const ListarProduto = () => {
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
              <th scope="col">Categoria</th>
              <th scope="col">Estoque</th>
              <th scope="col">Preço</th>
              <th scope="col" className="col-btn">
                Atualizar
              </th>
              <th scope="col" className="col-btn">
                Deletar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Shampoo Aussie</td>
              <td>Cabelo</td>
              <td>20</td>
              <td>R$29,99</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() => openModalAtualizar(1, "Shampoo Aussie", "Cabelo", 20, "R$29,99")}
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
                    onClick={() => openModalDeletar(1, "Shampoo Aussie")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>BRAÉ Anti-Frizz</td>
              <td>Cabelo</td>
              <td>5</td>
              <td>R$138,00</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() => openModalAtualizar(2, "BRAÉ Anti-Frizz", "Cabelo", 5, "R$138,00")}
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
                    onClick={() => openModalDeletar(2, "BRAÉ Anti-Frizz")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Redken Curvaceous - Cond</td>
              <td>the Bird</td>
              <td>30</td>
              <td>R$129,90</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(3, "Redken Curvaceous - Cond", "the Bird", 30, "R$129,90")
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
                      openModalDeletar(3, "Redken Curvaceous - Cond")
                    }
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>UrbanMen Gel Barbear</td>
              <td>Barbearia</td>
              <td>30</td>
              <td>R$27,00</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(4, "UrbanMen Gel Barbear", "Barbearia", 30, "R$27,00")
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
                    onClick={() => openModalDeletar(4, "UrbanMen Gel Barbear")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Lancôme Loção Corporal</td>
              <td>Pele</td>
              <td>18</td>
              <td>R$224,00</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(5, "Lancôme Loção Corporal", "Pele", 18, "R$224,00")
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
                      openModalDeletar(5, "Lancôme Loção Corporal")
                    }
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>BioOil Pele Seca</td>
              <td>Pele</td>
              <td>5</td>
              <td>R$29,90</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() => openModalAtualizar(6, "BioOil Pele Seca", "Pele", 5, "R$29,90")}
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
                    onClick={() => openModalDeletar(6, "BioOil Pele Seca")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Tônico Salon Line SOS</td>
              <td>Cabelo</td>
              <td>35</td>
              <td>R$11,50</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(7, "Tônico Salon Line SOS", "Cabelo", 35, "R$11,50")
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
                    onClick={() => openModalDeletar(7, "Tônico Salon Line SOS")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>BRAÉ Divine</td>
              <td>Cabelo</td>
              <td>11</td>
              <td>R$148,00</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() => openModalAtualizar(8, "BRAÉ Divine", "Cabelo", 11, "R$148,00")}
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
                    onClick={() => openModalDeletar(8, "BRAÉ Divine")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Máscara Yenzah</td>
              <td>Cabelo</td>
              <td>17</td>
              <td>R$23,89</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() => openModalAtualizar(9, "Máscara Yenzah", "Cabelo", 17, "R$23,89")}
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
                    onClick={() => openModalDeletar(9, "Máscara Yenzah")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>UrbanMen Óleo p/ Barba</td>
              <td>Barbearia</td>
              <td>8</td>
              <td>R$26,00</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(10, "UrbanMen Óleo p/ Barba", "Barbearia", 8, "R$26,00")
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
                      openModalDeletar(10, "UrbanMen Óleo p/ Barba")
                    }
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Removedor de Esmalte</td>
              <td>Unhas</td>
              <td>20</td>
              <td>R$12,90</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(11, "Removedor de Esmalte", "Unhas", 20, "R$12,90")
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
                    onClick={() => openModalDeletar(11, "Removedor de Esmalte")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Wella Fusion Shampoo</td>
              <td>Cabelo</td>
              <td>31</td>
              <td>R$189,90</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(12, "Wella Fusion Shampoo", "Cabelo", 31, "R$189,90")
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
                    onClick={() => openModalDeletar(12, "Wella Fusion Shampoo")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Risqué Friends</td>
              <td>Unhas</td>
              <td>19</td>
              <td>R$5,99</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() => openModalAtualizar(13, "Risqué Friends", "Unhas", 19, "R$5,99")}
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
                    onClick={() => openModalDeletar(13, "Risqué Friends")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Payot Framb Hidratante</td>
              <td>Pele</td>
              <td>14</td>
              <td>R$37,90</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(14, "Payot Framb Hidratante", "Pele", 14, "R$37,90")
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
                      openModalDeletar(14, "Payot Framb Hidratante")
                    }
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Fluído p/ Escova Trivitt</td>
              <td>the Bird</td>
              <td>23</td>
              <td>R$37,90</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(15, "Fluído p/ Escova Trivitt", "the Bird", 23, "R$37,90")
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
                      openModalDeletar(15, "Fluído p/ Escova Trivitt")
                    }
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Impala Cremoso Terra</td>
              <td>Unhas</td>
              <td>54</td>
              <td>R$2,99</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(16, "Impala Cremoso Terra", "Unhas", 54, "R$2,99")
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
                    onClick={() => openModalDeletar(16, "Impala Cremoso Terra")}
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>FarmaEvas Cond. Camomila</td>
              <td>Cabelo</td>
              <td>3</td>
              <td>R$19,99</td>
              <td>
                <div className="btn-wrapper">
                  <button
                    onClick={() =>
                      openModalAtualizar(17, "FarmaEvas Cond. Camomila", "Cabelo", 3, "R$19,99")
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
                      openModalDeletar(17, "FarmaEvas Cond. Camomila")
                    }
                    type="btn"
                    className="btn-delete"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListarProduto;
