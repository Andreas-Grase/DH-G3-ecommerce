import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const AdicionarProduto = () => {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [id_categoria, setId_categoria] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/produtos", {
        nome: nome,
        marca: marca,
        quantidade: quantidade,
        preco: preco,
        id_categoria: id_categoria,
      });
      //   window.location.pathname = "/produtos";
      //   history.push("/produtos");
      history.push("listar");
      console.log(response);
    } catch (error) {
      if (error.response.data) alert(error.response.data.message);
      else alert("Ops, deu ruim");
    }
    // alert("Você submeteu o form");
  };

  return (
    <section>
      <div className="header-section">
        <div className="add-icon">
          <i class="fas fa-file-medical fa-2x" />
        </div>
        <h1 className="title">Adicionar novo produto</h1>
      </div>
      {/* <div className="add-img">
        <div className="image-upload"></div>
        <button className="upload-btn">Upload</button>
      </div> */}
      <form className="container-flex" onSubmit={handleSubmit}>
        <div className="product-info">
          <div className="product">
            <input
              type="text"
              name="nome"
              className="product-name"
              required
              placeholder="Novo produto"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            <input
              type="text"
              name="marca"
              className="product-name"
              required
              placeholder="Marca produto"
              value={marca}
              onChange={(e) => {
                setMarca(e.target.value);
              }}
            />
            <input
              type="text"
              name="quantidade"
              className="product-name"
              required
              placeholder="Quantidade produto"
              value={quantidade}
              onChange={(e) => {
                setQuantidade(e.target.value);
              }}
            />
            <input
              type="text"
              name="id_categoria"
              className="id_categoria"
              required
              placeholder="ID Categoria"
              value={id_categoria}
              onChange={(e) => {
                setId_categoria(e.target.value);
              }}
            />
            <div nameClass="product-info"></div>
            <div className="product-section">
              <div className="price">
                <h3>Preço:</h3>
                <div className="price-container">
                  <div className="icon-container">
                    <i class="fas fa-dollar-sign fa-1.5x" />
                  </div>
                  <input
                    type="text"
                    name="preco"
                    className="preco"
                    required
                    placeholder="00,00"
                    value={preco}
                    onChange={(e) => {
                      setPreco(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="price-container">
                  <div className="icon-container">
                    <span>De</span>
                  </div>
                  <input
                    type="date"
                    className="data-inicio-desconto"
                    nome="data"
                    required
                    placeholder="00,00"
                    value={preco}
                    onChange={(e) => {
                      setPreco(e.target.value);
                    }}
                  />
                </div> */}
              </div>
              {/* <div className="discount">
                <h3>Preço com desconto</h3>
                <div className="discount-container">
                  <div className="icon-container">
                    <i class="fas fa-dollar-sign fa-1.5x" />
                  </div>
                  <input className="preco-desconto" placeholder="00,00" />
                </div>
                <div className="discount-container">
                  <div className="icon-container">
                    <span>Até</span>
                  </div>
                  <input type="date" className="data-final-desconto" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="btn-back">
          <button id="back">Adicionar Produto</button>
        </div>
      </form>
      {/* <div className="categories-container">
        <select className="categories">
          <option value="" disabled selected>
            Categorias
          </option>
          <option value="">Barbearia</option>
          <option value="">Cabelo</option>
          <option value="">Lançamentos</option>
          <option value="">Pele</option>
          <option value="">Unhas</option>
        </select>
      </div>
      <textarea
        rows="4"
        cols="50"
        className="product-description"
        placeholder="Insira aqui uma breve descrição do seu produto..."
      /> */}
    </section>
  );
};

export default AdicionarProduto;
