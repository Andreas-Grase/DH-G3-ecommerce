import produto1 from '../../assets/img/ofertas/produto1.png'
import produto2 from '../../assets/img/ofertas/produto2.png'
import produto3 from '../../assets/img/ofertas/produto3.png'
import produto4 from '../../assets/img/ofertas/produto4.png'
import produto5 from '../../assets/img/ofertas/produto5.png'
import produto6 from '../../assets/img/ofertas/produto6.png'
import { useState } from 'react'
import "./style.css"
import React from 'react'

const Ofertas = () => {

    // uso do state de acordo com o exemplo em https://github.com/SerraZ3/react-js-introducao

    // declaração do state
    // a primeira variável contém o valor do state
    // a segunda variável contém a função que irá alterar esse valor
    const [slide, setSlide] = useState(0)

    const setSlideMV = () => {
        document.querySelector(".slide-ofertas").style.display="none";
        document.querySelector(".slide-mais-vendidos").style.display="flex";
    }

    const setSlideOfertas = () => {
        document.querySelector(".slide-mais-vendidos").style.display="none";
        document.querySelector(".slide-ofertas").style.display="flex";
    }

    return (
        <section className="promo">

            {/* botões */}
            <div className="container-botoes">
                <a className="botao-ofertas" onClick={setSlideOfertas}>
                    <h2 className="titulo-promo">Ofertas</h2>
                </a>
                <a className="botao-mv" onClick={setSlideMV}>
                    <h2 className="titulo-promo">Mais Vendidos</h2>
                </a>
            </div>

            {/* slideshow container */}
            <div className="slideshow-promo-container">
                
                {/* slide "ofertas" */}
                <div className="slide-ofertas">

                    <div className="produto-slide-promo">
                        <img class="slide-promo-img" src={produto1} alt="shampoo" />
                        <p>Marca: <strong>Head and Shoulders</strong></p>
                        <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                        <p>Preço: <strong>R$ 499,99</strong></p>
                    </div>

                    <div class="produto-slide-promo">
                        <img class="slide-promo-img" src={produto2} alt="shampoo" />
                        <p>Marca: <strong>Head and Shoulders</strong></p>
                        <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                        <p>Preço: <strong>R$ 499,99</strong></p>
                    </div>

                    <div class="produto-slide-promo">
                        <img class="slide-promo-img" src={produto3} alt="shampoo" />
                        <p>Marca: <strong>Head and Shoulders</strong></p>
                        <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                        <p>Preço: <strong>R$ 499,99</strong></p>
                    </div>

                </div>

                {/* slide "mais vendidos" */}
                <div className="slide-mais-vendidos">
                    <div className="produto-slide-promo">
                        <img className="slide-promo-img" src={produto4} alt="shampoo" />
                        <p>Marca: <strong>Head and Shoulders</strong></p>
                        <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                        <p>Preço: <strong>R$ 499,99</strong></p>
                    </div>
                    <div className="produto-slide-promo">
                        <img className="slide-promo-img" src={produto5} alt="shampoo" />
                        <p>Marca: <strong>Head and Shoulders</strong></p>
                        <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                        <p>Preço: <strong>R$ 499,99</strong></p>
                    </div>
                    <div className="produto-slide-promo">
                        <img className="slide-promo-img" src={produto6} alt="shampoo" />
                        <p>Marca: <strong>Head and Shoulders</strong></p>
                        <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                        <p>Preço: <strong>R$ 499,99</strong></p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Ofertas