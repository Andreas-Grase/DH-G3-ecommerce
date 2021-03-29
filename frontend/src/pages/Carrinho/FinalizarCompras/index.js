import { NavLink } from "react-router-dom";
import "./style.css";

const FinalizarCompras = () => {
  return (
    <section className="finalizar-compras">
      <article className="detalhes-da-compra">
        <h2>Detalhes da Sua Compra</h2>
        <h6>Detalhes do envio</h6>
        <div className="endereco-entrega">Edereço de entrega</div>
        <div className="opcoes-frete">
          <ul>
            <li>
              <div className="ui-radio-element"></div>
              <div className="cart-package__shipping-box">
                <div className="cart-package__shipping__title">
                  Chegará amanhã
                </div>
                <div className="cart-package__shipping-price">R$ 150,99</div>
              </div>
            </li>
            <li>
              <div className="ui-radio-element"></div>
              <div className="cart-package__shipping-box">
                <div className="cart-package__shipping__title">
                  Chegará Segunda-feira, 29 de março
                </div>
                <div className="cart-package__shipping-price">R$ 11,50</div>
              </div>
            </li>
          </ul>
        </div>
        <nav className="btn">
          <NavLink to="/" className="btn-continuar">
            Continuar
          </NavLink>
        </nav>
      </article>
      <article className="opcoes-de-pagamento">
        <h4>Opções de pagamento</h4>
        <div>
          <ul>
            <li>Cartão de crédito</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Cartão de débito</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>PIX</li>
          </ul>
        </div>
        <div>
          <ul>
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
          <div>Endereço de entrega</div>
          <div>Prazo de entrega definido pelo frete escolhido</div>
        </div>
        <div>Produto(s) escolhido(s)</div>
        <nav className="btn">
          <NavLink to="/" className="btn-continuar">
            Confirmar a compra
          </NavLink>
        </nav>
      </article>
    </section>
  );
};

export default FinalizarCompras;