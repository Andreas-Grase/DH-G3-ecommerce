import "./style.css";
import getImages from '../../assets/img/produto'

const Produto = () => {

  const images = getImages();

  const imgs = document.querySelectorAll('.img-select a');
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`
  }

  window.addEventListener('resize', slideImage);

  return (
    <div className="product-page">
      <div className="card-wrapper">
        <div className="card-product">
          {/* card a esquerda */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={images[0]} alt="" />
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
                <img src={images[3]} alt="" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img src={images[0]} alt="shampoo image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img src={images[1]} alt="shampoo image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img src={images[2]} alt="shampoo image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img src={images[3]} alt="shampoo image" />
                </a>
              </div>
            </div>
          </div>
          {/*card a direita*/}
          <div className="product-content">
            <h2 className="product-title">shampoo aussie</h2>
            <div className="product-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>4.7(21)</span>
            </div>
            <div className="product-price">
              <p className="last-price">
                Último preço: <span>R$34,99</span>
              </p>
              <p className="new-price">
                Novo preço: <span>R$29,99 (12%)</span>
              </p>
            </div>
            <div className="product-detail">
              <h2>Sobre este produto: </h2>
              <p>
                Cabelo seco à espera de um milagre? Sorte a sua que este shampoo
                tem tudo para resolver o que você precisa. Nossa fórmula com
                extrato de Óleo de Jojoba, Aloe Vera e Alga Marinha australiana
                traz uma infusão de hidratação milagrosa para deixar os cabelos
                limpos e macios. Traz uma infusão de hidratação milagrosa. Deixa
                os cabelos limpos e macios. Hidratação Milagrosa.
              </p>
              <ul>
                <li>
                  Marca: <span>Aussie</span>
                </li>
                <li>
                  Volume (ml): <span>360ml</span>
                </li>
                <li>
                  Estoque: <span>Disponível</span>
                </li>
                <li>
                  Categoria: <span>Shampoo</span>
                </li>
                <li>
                  Modelo: <span>Moist</span>
                </li>
              </ul>
            </div>
            <div className="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" className="btn">
                Adicione ao carrinho <i className="fas fa-shopping-cart" />
              </button>
            </div>
            <div className="social-links">
              <p>Compartilhe: </p>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="small-container">
        <div className="card-mini">
          <div class="card-body">
            <h5 className="card-title">aussie miracle curls defining oil</h5>
            <a className="card-img" href="#">
              <img src={images[4]} alt="" />
            </a>
            <p className="card-text"><span>C</span>achos crespos e secos clamando por um milagre? Estamos protegendo você. Tratamento com óleo Miracle Curls Curl-Defining, infundido com óleo de coco e jojoba australiano, é instantaneamente absorvido pelo cabelo e sela as cutículas para bloquear a hidratação, reduzir o frizz e adicionar brilho. Esta fórmula rica e sem parabenos dará aos seus cachos a suavidade que eles desejam!</p>
            <button type="button" className="card-btn">Compre</button>
          </div>
        </div>
        <div className="card-mini">
          <div class="card-body">
            <h5 className="card-title">OLeave- Aussie Hair Insurance</h5>
            <a className="card-img" href="#">
              <img src={images[5]} alt="" />
            </a>
            <p className="card-text"><span>OL</span>eave- Aussie Hair Insurance traz hidratação intensa e força para os fios, deixando o cabelo suave e com aroma incrível. Sua fórmula possui ingredientes exóticos: Aloe Vera Australiano, Alga Marinha, e Óleo de Jojoba, garantindo alta facilidade para desembaraçar, nutrir, amaciar e restaurar os cabelos. Além de trazer um aspecto incrível, deixa os cabelos macios e sedosos.</p>
            <button type="button" className="card-btn">Compre</button>
          </div>
        </div>
        <div className="card-mini">
          <div class="card-body">
            <h5 className="card-title">aussie miracle curls</h5>
            <a className="card-img" href="#">
              <img src={images[6]} alt="" />
            </a>
            <p className="card-text"><span>A</span>USSIE MIRACLE CURLS CREME PUDDING PENTEAR 225ML SEM SULFATOS
              DIGA OLÁ PARA QUEM ENTENDE DE CURLS ( CACHOS ) . Mantenha o frizz bem longe e verifique seus cachos com o pudim de creme Aussie Miracle Curls. Esta fórmula leve, livre de sulfato e parabeno é feita com coco e óleo de jojoba australiano e ajuda a reter a umidade enquanto define os cachos com uma fixação leve. Trabalhe nos cabelos úmidos da raiz às pontas e deixe secar ao ar para obter mechas lisas, brilhantes, com cheiro de morango e romã.
              Aussie Miracle Curls com óleo de coco, pudim de creme sem parabenos, 7,6 fl oz: ( 225 ml)
              PERFEITO PARA Cabelos secos e encaracolados
              USE-O PARA definir e manter cachos
              INFUSADO COM coco e óleo de jojoba australiano
              Cheira a morango, romã e almíscar
              LIVRE DE sulfatos, parabenos e estresse</p>
            <button type="button" className="card-btn">Compre</button>
          </div>
        </div>
        <div className="card-mini">
          <div class="card-body">
            <h5 className="card-title">pacote aussie mosist</h5>
            <a className="card-img" href="#">
              <img src={images[7]} alt="" />
            </a>
            <p className="card-text"><span>A</span>USSIE moist combo (shampoo + condicionador + leave-in)</p>
            <button type="button" className="card-btn">Compre</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;