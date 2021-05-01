import barbearia from "../../assets/img/nossos-produtos/produtosBarbearia2.png";
import cabelo from "../../assets/img/nossos-produtos/produtosCabelo2.png";
import lancamentos from "../../assets/img/nossos-produtos/produtosLançamentos2.png";
import pele from "../../assets/img/nossos-produtos/produtosPele2.png";
import unhas from "../../assets/img/nossos-produtos/produtosUnhas2.png";
import "./style.css";

const Categorias = () => {
  return (
    <section id="produtos">
      <div className="titulo-categorias">
        <h2>Nossos Produtos</h2>
        <h4>Conheça nossas categorias</h4>
      </div>
      <div id="ladoalado">
        <a href="/produtos">
          <img className="img-produtos1" src={barbearia} alt="shampoo" />
        </a>
        <a href="/produtos">
          <img className="img-produtos" src={cabelo} alt="condicionador" />
        </a>
        <a href="/produtos">
          <img className="img-produtos1" src={lancamentos} alt="mascaras" />
        </a>
        <a href="/produtos">
          <img className="img-produtos" src={pele} alt="cremes" />
        </a>
        <a href="/produtos">
          <img className="img-produtos1" src={unhas} alt="barbearia" />
        </a>
      </div>
    </section>
  );
};

export default Categorias;
