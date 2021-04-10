import barbearia from "../../assets/img/nossos-produtos/produtosBarbearia.png";
import cabelo from "../../assets/img/nossos-produtos/produtosCabelo.png";
import lancamentos from "../../assets/img/nossos-produtos/produtosLançamentos.png";
import pele from "../../assets/img/nossos-produtos/produtosPele.png";
import unhas from "../../assets/img/nossos-produtos/produtosUnhas.png";
import "./style.css";

const Categorias = () => {
  return (
    <section id="produtos">
      <div className="titulo-categorias">
        <h2>Nossos Produtos</h2>
        <h4>Conheça nossas categorias</h4>
      </div>
      <div id="ladoalado">
        <a href="shampoo.html">
          <img className="img-produtos1" src={barbearia} alt="shampoo" />
        </a>
        <a href="condicionador.html">
          <img className="img-produtos" src={cabelo} alt="condicionador" />
        </a>
        <a href="mascara.html">
          <img className="img-produtos1" src={lancamentos} alt="mascaras" />
        </a>
        <a href="cremes">
          <img className="img-produtos" src={pele} alt="cremes" />
        </a>
        <a href="barbearia">
          <img className="img-produtos1" src={unhas} alt="barbearia" />
        </a>
      </div>
    </section>
  );
};

export default Categorias;
