import barbearia from '../../assets/img/nossos-produtos/barbearia.svg'
import cabelo from '../../assets/img/nossos-produtos/cabelo.svg'
import lancamentos from '../../assets/img/nossos-produtos/lancamentos.svg'
import pele from '../../assets/img/nossos-produtos/pele.svg'
import unhas from '../../assets/img/nossos-produtos/unhas.svg'
import './style.css'

const Categorias = () => {
    return (
        <section id="produtos">
            <div className="titulo-categorias">
                <h2>Nossos Produtos</h2>
                <h4>Conheça nossas categorias</h4>
            </div>
        <div id="ladoalado">
          <a href="shampoo.html"><img class="img-produtos1" src={barbearia} alt="shampoo" /></a>
          <a href="condicionador.html"><img class="img-produtos" src={cabelo} alt="condicionador" /></a>
          <a href="mascara.html"><img class="img-produtos1" src={lancamentos} alt="mascaras" /></a>
          <a href="cremes"><img class="img-produtos" src={pele} alt="cremes" /></a>
          <a href="barbearia"><img class="img-produtos1" src={unhas} alt="barbearia" /></a>
        </div>
      </section>
    )
}     

export default Categorias
