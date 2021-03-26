import produto1 from '../../assets/img/ofertas/produto1.png'
import produto2 from '../../assets/img/ofertas/produto2.png'
import produto3 from '../../assets/img/ofertas/produto3.png'
import produto4 from '../../assets/img/ofertas/produto4.png'
import produto5 from '../../assets/img/ofertas/produto5.png'
import produto6 from '../../assets/img/ofertas/produto6.png'
import "./style.css"

function mudarSlidePromo(slide) {
    var slideOfertas = document.querySelector(".slide-ofertas");
    var slideMV = document.querySelector(".slide-mais-vendidos");

    if(slide==1){
        slideOfertas.style.display="flex";
        slideMV.style.display="none";
    } 
    if(slide==2){
        slideMV.style.display="flex";
        slideOfertas.style.display="none";
    }
}

const Ofertas = () => {
    return (
        <section className="promo">

            {/* botões */}
            <div className="container-botoes">
                <a className="botao-ofertas" onClick={() => mudarSlidePromo(1)}>
                    <h2 className="titulo-promo">Ofertas</h2>
                </a>
                <a className="botao-mv" onClick={() => mudarSlidePromo(2)}>
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