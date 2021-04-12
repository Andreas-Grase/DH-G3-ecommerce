import { useHistory } from "react-router-dom";
import Ellipse10 from "../../../assets/img/finalizar-compras/Ellipse10.png";
import Ellipse9 from "../../../assets/img/finalizar-compras/Ellipse9.png";
import { NavComprasButton } from "../../../components/Button";
import "./style.css";

const DetalhesDaCompra = (props) => {
  const { setActivePage } = props;
  const history = useHistory();
  return (
    <section className="finalizar-compras">
      <article className="detalhes-da-compra">
        <h2>Detalhes da Sua Compra</h2>
        <h3>Detalhes do envio</h3>
        <div className="endereco-entrega">
          <p>Logradouro</p>
          <p>Compemento, Cidade, Estado, CEP</p>
          <p>Nome</p>
        </div>
        <form className="opcoes-frete">
          <div className="frete1">
            <div>
              <input type="radio" id="value" />
              <label for="" className="data-frete">
                &nbsp;Chegará amanhã
              </label>
            </div>
            <label className="valor-frete">R$ 150,99</label>
          </div>
          <div className="frete2">
            <div>
              <input type="radio" id="value" />
              <label for="" className="data-frete">
                &nbsp;Chegará Segunda-feira, 29 de março
              </label>
            </div>
            <label className="valor-frete">R$ 11,50</label>
          </div>
        </form>
        <div className="buttons">
          <NavComprasButton
            titulo="Voltar"
            executeFunction={() => history.push("/shopping__cart")}
          />
          <NavComprasButton
            titulo="Continuar"
            executeFunction={() => setActivePage(1)}
          />
        </div>
      </article>
    </section>
  );
};

export default DetalhesDaCompra;
