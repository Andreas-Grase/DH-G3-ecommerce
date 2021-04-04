import { NavLink } from "react-router-dom";
import CartaoDeCredito from "../../../assets/img/finalizar-compras/CartaoDeCredito.png";
import CartaoDeDebito from "../../../assets/img/finalizar-compras/CartaoDeDebito.png";
import PIX from "../../../assets/img/finalizar-compras/PIX.png";
import boleto from "../../../assets/img/finalizar-compras/boleto.png";
import Ellipse9 from "../../../assets/img/finalizar-compras/Ellipse9.png";
import Ellipse10 from "../../../assets/img/finalizar-compras/Ellipse10.png";
import "./style.css";

const DetalhesDaCompra = () => {
  return (
    <section className="finalizar-compras">
      <article className="detalhes-da-compra">
        <h2>Detalhes da Sua Compra</h2>
        <h6>Detalhes do envio</h6>
        <div className="endereco-entrega">
          <p>Logradouro</p>
          <p>Compemento, Cidade, Estado, CEP</p>
          <p>Nome</p>
        </div>
        <div className="opcoes-frete">
          <div>
            <div className="cart-package__shipping-box">
              <a href="/"><img src={Ellipse9} className="ui-radio-element" /></a>
              <div className="cart-package__shipping__title">
                Chegará amanhã
              </div>
            </div>
            <div className="cart-package__shipping-price">R$ 150,99</div>
          </div>
          <div>
            <div className="cart-package__shipping-box">
            <a href="/"><img src={Ellipse10} className="ui-radio-element" /></a>
              <div className="cart-package__shipping__title">
                Chegará Segunda-feira, 29 de março
              </div>
            </div>
            <div className="cart-package__shipping-price">R$ 11,50</div>
          </div>
        </div>
        <nav id="btn-continuar">
          <NavLink to="/" id="btn-continuar2">
            Voltar
          </NavLink>
          <NavLink to="/" id="btn-continuar2">
            Continuar
          </NavLink>
        </nav>
      </article>
    </section>
  );
};

export default DetalhesDaCompra;
