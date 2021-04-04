import { NavLink } from "react-router-dom";
import CartaoDeCredito from "../../../assets/img/finalizar-compras/CartaoDeCredito.png";
import CartaoDeDebito from "../../../assets/img/finalizar-compras/CartaoDeDebito.png";
import PIX from "../../../assets/img/finalizar-compras/PIX.png";
import boleto from "../../../assets/img/finalizar-compras/boleto.png";
import Ellipse9 from "../../../assets/img/finalizar-compras/Ellipse9.png";
import Ellipse10 from "../../../assets/img/finalizar-compras/Ellipse10.png";
import "./style.css";

const OpcoesDePagamento = () => {
  return (
    <section className="finalizar-compras">
      <article className="opcoes-de-pagamento">
        <h6>Opções de pagamento</h6>
        <div>
          <ul className="pagamento">
            <img src={CartaoDeCredito} />
            <li>Cartão de crédito</li>
          </ul>
          <ul className="pagamento">
            <img src={CartaoDeDebito} />
            <li>Cartão de débito</li>
          </ul>
          <ul className="pagamento">
            <img src={PIX} />
            <li>PIX</li>
          </ul>
          <ul className="pagamento">
            <img src={boleto} />
            <li>Boleto</li>
          </ul>
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

export default OpcoesDePagamento;
