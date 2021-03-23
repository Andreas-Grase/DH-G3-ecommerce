import imagemteste1 from '../../assets/img/nossos-produtos/imagemteste1.jpg'
import imagemteste2 from '../../assets/img/nossos-produtos/imagemteste2.jpg'
import imagemteste3 from '../../assets/img/nossos-produtos/imagemteste3.jpg'
import imagemteste4 from '../../assets/img/nossos-produtos/imagemteste4.jpg'
import imagemteste5 from '../../assets/img/nossos-produtos/imagemteste5.jpg'
import './style.css'

const Categorias = () => {
    return (
        <section id="produtos">
            <div className="titulo-categorias">
                <h2>Nossos Produtos</h2>
                <h4>Conheça nossas categorias</h4>
            </div>
        <div id="ladoalado">
          <a href="shampoo.html"><img class="img-produtos1" src={imagemteste1} alt="shampoo" /></a>
          <a href="condicionador.html"><img class="img-produtos" src={imagemteste2} alt="condicionador" /></a>
          <a href="mascara.html"><img class="img-produtos1" src={imagemteste3} alt="mascaras" /></a>
          <a href="cremes"><img class="img-produtos" src={imagemteste4} alt="cremes" /></a>
          <a href="barbearia"><img class="img-produtos1" src={imagemteste5} alt="barbearia" /></a>
        </div>
      </section>
    )
}     

export default Categorias
