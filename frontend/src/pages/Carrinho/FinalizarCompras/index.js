import { NavLink } from "react-router-dom";
import CartaoDeCredito from "../../../assets/img/finalizar-compras/CartaoDeCredito.png";
import CartaoDeDebito from "../../../assets/img/finalizar-compras/CartaoDeDebito.png";
import PIX from "../../../assets/img/finalizar-compras/PIX.png";
import boleto from "../../../assets/img/finalizar-compras/boleto.png";
import Ellipse9 from "../../../assets/img/finalizar-compras/Ellipse9.png";
import Ellipse10 from "../../../assets/img/finalizar-compras/Ellipse10.png";
import "./style.css";

const FinalizarCompras = () => {
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
              <img src={Ellipse9} className="ui-radio-element" />
              <div className="cart-package__shipping__title">
                Chegará amanhã
              </div>
            </div>
            <div className="cart-package__shipping-price">R$ 150,99</div>
          </div>
          <div>
            <div className="cart-package__shipping-box">
              <img src={Ellipse10} className="ui-radio-element" />
              <div className="cart-package__shipping__title">
                Chegará Segunda-feira, 29 de março
              </div>
            </div>
            <div className="cart-package__shipping-price">R$ 11,50</div>
          </div>
        </div>
        <nav className="btn">
          <NavLink to="/" className="btn-continuar">
            Continuar
          </NavLink>
        </nav>
      </article>
      <article className="opcoes-de-pagamento">
        <h4>Opções de pagamento</h4>
        <div className="pagamento">
          <ul>
            <img src={CartaoDeCredito} />
            <li>Cartão de crédito</li>
          </ul>
        </div>
        <div className="pagamento">
          <ul>
            <img src={CartaoDeDebito} />
            <li>Cartão de débito</li>
          </ul>
        </div>
        <div className="pagamento">
          <ul>
            <img src={PIX} />
            <li>PIX</li>
          </ul>
        </div>
        <div className="pagamento">
          <ul>
            <img src={boleto} />
            <li>Boleto</li>
          </ul>
        </div>
        <nav className="btn">
          <NavLink to="/" className="btn-continuar">
            Continuar
          </NavLink>
        </nav>
      </article>
      <article className="revise-sua-compra">
        <div>
          <h3>Revise e confirme sua compra</h3>
          <h4>Detalhes do envio</h4>
          <div className="endereco-entrega">
            <p>Logradouro</p>
            <p>Compemento, Cidade, Estado, CEP</p>
            <p>Nome</p>
          </div>
          <div className="prazo-de-entrega">
            Prazo de entrega definido pelo frete escolhido
          </div>
        </div>
        <div className="produto-a-comprar">
          <div>Produto(s) escolhido(s)</div>
          <nav className="btn">
            <NavLink to="/" className="btn-finalizar-compra">
              Finalizar a compra
            </NavLink>
          </nav>
        </div>
      </article>
    </section>
  );
};

export default FinalizarCompras;
