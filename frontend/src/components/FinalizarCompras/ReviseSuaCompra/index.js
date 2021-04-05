import { NavLink } from "react-router-dom";
import CartaoDeCredito from "../../../assets/img/finalizar-compras/CartaoDeCredito.png";
import CartaoDeDebito from "../../../assets/img/finalizar-compras/CartaoDeDebito.png";
import PIX from "../../../assets/img/finalizar-compras/PIX.png";
import boleto from "../../../assets/img/finalizar-compras/boleto.png";
import Ellipse9 from "../../../assets/img/finalizar-compras/Ellipse9.png";
import Ellipse10 from "../../../assets/img/finalizar-compras/Ellipse10.png";
import Produto from "../../../assets/img/finalizar-compras/Produto.png";
import "./style.css";

const ReviseSuaCompra = () => {
  return (
    <section className="finalizar-compras">
      <article className="revise-sua-compra">
        <div>
          <h3>Revise e confirme sua compra</h3>
          <h6>Detalhes do envio</h6>
          <div className="endereco-entrega2">
            <p>Logradouro</p>
            <p>Compemento, Cidade, Estado, CEP</p>
            <p>Nome</p>
          </div>
          <div className="prazo-de-entrega">
            Prazo de entrega definido pelo frete escolhido
          </div>
        </div>
        <div className="produto-a-comprar">
          <img src={Produto} />
          <div className="descricao-produto">
            <p>PACOTE DE PANOS LIMPADORES X 40</p>
            <p>Modelo: 6</p>
            <p>Quantidade: 1</p>
          </div>
          <div className="descricao-valores">
            <div className="valor-produto">
              <p>Produto</p>
              <p>R$ 100,00</p>
            </div>
            <div className="valor-envio">
              <p>Envio</p>
              <p>R$ 10,00</p>
            </div>
            <div className="valor-total">
              <p>Você pagará</p>
              <p>R$ 110,00</p>
            </div>
            <nav id="btn-finalizar-compra">
              <NavLink to="/" id="btn-finalizar-compra2">
                Finalizar a compra
              </NavLink>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ReviseSuaCompra;