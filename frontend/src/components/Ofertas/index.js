import produto1 from '../../assets/img/ofertas/produto1.png'
import produto2 from '../../assets/img/ofertas/produto2.png'
import produto3 from '../../assets/img/ofertas/produto3.png'
import produto4 from '../../assets/img/ofertas/produto4.png'
import produto5 from '../../assets/img/ofertas/produto5.png'
import produto6 from '../../assets/img/ofertas/produto6.png'
import { useState } from 'react'
import "./style.css"
import React from 'react'

const SlideOfertas = () => {
    return (
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
    )
}

const SlideMV = () => {
    return (
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
    )
}

const Ofertas = () => {

    // uso do state de acordo com o exemplo em https://github.com/SerraZ3/react-js-introducao

    // declaração do state
    // a primeira variável contém o valor do state
    // a segunda variável contém a função que irá alterar esse valor
    const [slideAtual, setSlide] = useState(SlideOfertas)

    const setSlideMV = () => {
        setSlide(SlideMV)
    }

    const setSlideOfertas = () => {
        setSlide(SlideOfertas)
    }

    return (
        <section className="promo">

            {/* botões */}
            <div className="container-botoes">
                <div className="botao-ofertas" onClick={setSlideOfertas}>
                    <h2 className="titulo-promo">Ofertas</h2>
                </div>
                <div className="botao-mv" onClick={setSlideMV}>
                    <h2 className="titulo-promo">Mais Vendidos</h2>
                </div>
            </div>

            {/* slideshow container */}
            <div className="slideshow-promo-container">
                {slideAtual}
            </div>

        </section>
    )
}

export default Ofertas