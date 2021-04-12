import boleto from "../../../assets/img/finalizar-compras/boleto.png";
import CartaoDeCredito from "../../../assets/img/finalizar-compras/CartaoDeCredito.png";
import CartaoDeDebito from "../../../assets/img/finalizar-compras/CartaoDeDebito.png";
import PIX from "../../../assets/img/finalizar-compras/PIX.png";
import { NavComprasButton } from "../../Button";
import "./style.css";

const OpcoesDePagamento = (props) => {
  const { setActivePage } = props;
  return (
    <section className="finalizar-compras">
      <article className="opcoes-de-pagamento">
        <h3>Opções de pagamento</h3>
        <div className="pagamentos">
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
        <div className="buttons">
          <NavComprasButton
            titulo="Voltar"
            executeFunction={() => setActivePage(0)}
          />
          <NavComprasButton
            titulo="Continuar"
            executeFunction={() => setActivePage(2)}
          />
        </div>
      </article>
    </section>
  );
};

export default OpcoesDePagamento;
