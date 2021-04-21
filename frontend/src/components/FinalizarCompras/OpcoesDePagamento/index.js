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
        <div className="pagamentos shadow">
          <form className="pagamento">
            <input type="radio" id="value" />
            <img src={CartaoDeCredito} alt="cartao-de-credito" />
            <label>Cartão de crédito</label>
          </form>
          <form className="pagamento">
            <input type="radio" id="value" />
            <img src={CartaoDeDebito} alt="cartao-de-debito" />
            <label>Cartão de débito</label>
          </form>
          <form className="pagamento">
            <input type="radio" id="value" />
            <img src={PIX} alt="pix" />
            <label>PIX</label>
          </form>
          <form className="pagamento">
            <input type="radio" id="value" />
            <img src={boleto} alt="boleto" />
            <label>Boleto</label>
          </form>
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
