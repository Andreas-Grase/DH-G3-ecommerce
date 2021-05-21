import React, { useState } from "react";
import "./style.css";
import truck from "../../assets/img/carrinho/icon-truck.svg";
import produto from "../../assets/img/carrinho/produto-carrinho.jpeg";
import { NavLink } from "react-router-dom";
const ProductRow = ({ imgUrl, price, quantity }) => {
  return (
    <tr>
      <td>
        <img class="produto-escolhido" src={imgUrl} alt="produto" />
      </td>
      <td>{`R$ ${price}`}</td>
      <td>{quantity}</td>
      <td>{`R$ ${price * quantity}`}</td>
    </tr>
  );
};
const Compras = () => {
  const [products, setProducts] = useState([
    {
      imgUrl: "./produto.jpg",
      price: 10.5,
      quantity: 3,
    },
    {
      imgUrl: "./Img.jpg",
      price: 12.5,
      quantity: 5,
    },
    {
      imgUrl: "./Img.jpg",
      price: 15.5,
      quantity: 3,
    },
  ]);
  return (
    <main>
      <br />
      <h2 class="titulo"> Este é o seu carrinho!</h2>
      <div class="flex-container">
        <div class="flex-item">
          <table class="table align-middle">
            <thead>
              <tr class="titulo-lista">
                <th>Produto</th>
                <th>Preço Unitário</th>
                <th>Quantidade</th>
                <th>Sub Total </th>
              </tr>
            </thead>
            {products.map((product, idx) => (
              <ProductRow
                key={idx}
                imgUrl={product.imgUrl}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </table>
        </div>
        <hr />
        <div class="flex-item">
          <div class="container2">
            <h4 class="mensagem2">Resumo do Carrinho</h4>
            <div className="container-resumo-carrinho">
              <table className="resumo" class="table table-sm table-borderless">
                <tr>
                  <th>Sub Total:</th>
                  <td>R$20,00</td>
                </tr>
                <tr>
                  <th>Frete:</th>
                  <td>(à calcular)</td>
                </tr>
                <tr>
                  <th>Total à vista:</th>
                  <td>R$20,00</td>
                </tr>
              </table>
            </div>
            <hr />
            <div class="calcule-frete">
              <img class="truck-icon" src={truck} alt="frete" />
              <label>Calcule o frete</label>
            </div>
            <br />
            <form>
              <div class="form-frete">
                <input
                  type="text"
                  class="form-input"
                  placeholder="Digite o seu CEP"
                />
              </div>
              <div class="button">
                <button type="submit" class="button">
                  Calcular
                </button>
              </div>
            </form>
            <hr />
            <form>
              <h4 class="mensagem2">Cupom de desconto</h4>
              <h5 class="subtitle">Informe seu Cupom de Desconto</h5>
              <br />
              <div class="form-cupom">
                <input
                  type="text"
                  class="form-input"
                  placeholder="Inserir código do cupom"
                />
              </div>
              <div class="button">
                <button type="submit" class="button">
                  Ok
                </button>
              </div>
            </form>
            <hr />
            <div class="button-end">
              <NavLink
                to="/shopping__cart/:finalizar__compras/:{id}"
                className="btn-continuar"
              >
                Confirmar a compra
              </NavLink>
              <br />
              <NavLink to="/produtos" class="button-continuar">
                Continuar comprando
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Compras;