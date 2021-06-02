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
        <h1>Nossos Produtos</h1>
        <h2>Conheça nossas categorias</h2>
      </div>
      <div id="ladoalado">
        <a href="/produtos">
          <img className="img-produtos1" src={barbearia} alt="shampoo" />
          <h3>Barbearia</h3>
        </a>
        <a href="/produtos">
          <img className="img-produtos" src={cabelo} alt="condicionador" />
          <h3>Cabelo</h3>
        </a>
        <a href="/produtos">
          <img className="img-produtos1" src={lancamentos} alt="mascaras" />
          <h3>Lançamentos</h3>
        </a>
        <a href="/produtos">
          <img className="img-produtos" src={pele} alt="cremes" />
          <h3>Pele</h3>
        </a>
        <a href="/produtos">
          <img className="img-produtos1" src={unhas} alt="barbearia" />
          <h3>Unhas</h3>
        </a>
      </div>
    </section>
  );
};

export default Categorias;
