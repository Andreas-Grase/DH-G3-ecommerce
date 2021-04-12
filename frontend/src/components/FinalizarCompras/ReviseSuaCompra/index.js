import Produto from "../../../assets/img/finalizar-compras/Produto.png";
import { EndButton, NavComprasButton } from "../../Button";
import "./style.css";

const ReviseSuaCompra = (props) => {
  const { setActivePage } = props;
  return (
    <section className="finalizar-compras">
      <article className="revise-sua-compra">
        <div>
          <h3>Revise e confirme sua compra</h3>
          <h4>Detalhes do envio</h4>
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
          <img src={Produto} alt="produto-a-comprar"/>
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
            <EndButton />
          </div>
        </div>
      </article>
      <NavComprasButton
        titulo="Voltar"
        executeFunction={() => setActivePage(1)}
      />
    </section>
  );
};

export default ReviseSuaCompra;
