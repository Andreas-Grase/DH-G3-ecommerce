import { Button } from "react-bootstrap";
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

            <a href="/produtos" className="produto-slide-promo">
                <img class="slide-promo-img" src={produto1} alt="shampoo" />
                <p>Marca: <strong>Head and Shoulders</strong></p>
                <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                <p>Preço: <strong>R$ 499,99</strong></p>
            </a>

            <a href="/produtos" class="produto-slide-promo">
                <img class="slide-promo-img" src={produto2} alt="shampoo" />
                <p>Marca: <strong>Head and Shoulders</strong></p>
                <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                <p>Preço: <strong>R$ 499,99</strong></p>
            </a>

            <a href="/produtos" class="produto-slide-promo">
                <img class="slide-promo-img" src={produto3} alt="shampoo" />
                <p>Marca: <strong>Head and Shoulders</strong></p>
                <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                <p>Preço: <strong>R$ 499,99</strong></p>
            </a>

        </div>
    )
}

const SlideMV = () => {
    return (
        <div className="slide-mais-vendidos">
            <a href="/produtos" className="produto-slide-promo">
                <img className="slide-promo-img" src={produto4} alt="shampoo" />
                <p>Marca: <strong>Head and Shoulders</strong></p>
                <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                <p>Preço: <strong>R$ 499,99</strong></p>
            </a>
            <a href="/produtos" className="produto-slide-promo">
                <img className="slide-promo-img" src={produto5} alt="shampoo" />
                <p>Marca: <strong>Head and Shoulders</strong></p>
                <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                <p>Preço: <strong>R$ 499,99</strong></p>
            </a>
            <a href="/produtos" className="produto-slide-promo">
                <img className="slide-promo-img" src={produto6} alt="shampoo" />
                <p>Marca: <strong>Head and Shoulders</strong></p>
                <p>Produto: <strong>Cabelos lisos 3000</strong></p>
                <p>Preço: <strong>R$ 499,99</strong></p>
            </a>
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

            {/* titulo */}
            <div className="titulo-ofertas">
                <h2>Nossas Ofertas</h2>
                <h4>Encontre nossos produtos mais vendidos</h4>
            </div>

            {/* slideshow container */}
            <div className="slideshow-promo-container">
                {slideAtual}
            </div>

            {/* botões */}
            <div className="buttons-ofertas">
                <nav id="btn-back">
                    <button id="back" onClick={setSlideOfertas}>
                    Ofertas
                    </button>
                </nav>
                <nav id="btn-back">
                    <button id="back" onClick={setSlideMV}>
                        Mais Vendidos
                    </button>
                </nav>
            </div>

        </section>
    )
}

export default Ofertas