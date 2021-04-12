import "./style.css";
import binoculares from '../../assets/icons/binoculares.svg'
import getImages from '../../assets/img/marcas'
const Marcas = () => {
  
  const images = getImages()
  
  return (
    <section className="marcas">
      <div className="titulo-marcas">
        <h2>Nossas Marcas</h2>
        <h4>Encontre as melhores marcas</h4>
      </div>
      <div className="cards-e-btn">
      <div className="img-marcas">
        <div className="imagem">
          <a href="/produtos">
            <img
              className="frente"
              src={images[0].frente}
              alt="img0"
            />
            <img
              className="verso"
              src={images[0].tras}
              alt="img0"
            />
          </a>
        </div>
        <div className="imagem">
          <a href="/produtos">
          <img
              className="frente"
              src={images[1].frente}
              alt="img1"
            />
            <img
              className="verso"
              src={images[1].tras}
              alt="img1"
            />
          </a>
        </div>
        <div className="imagem">
          <a href="/produtos">
          <img
              className="frente"
              src={images[2].frente}
              alt="img2"
            />
            <img
              className="verso"
              src={images[2].tras}
              alt="img2"
            />
          </a>
        </div>
        <div className="imagem">
          <a href="/produtos">
          <img
              className="frente"
              src={images[3].frente}
              alt="img2"
            />
            <img
              className="verso"
              src={images[3].tras}
              alt="img3"
            />
          </a>
        </div>
        <div className="imagem">
          <a href="/produtos">
          <img
              className="frente"
              src={images[4].frente}
              alt="img4"
            />
            <img
              className="verso"
              src={images[4].tras}
              alt="img4"
            />
          </a>
        </div>
        <div className="imagem">
          <a href="/produtos">
          <img
              className="frente"
              src={images[5].frente}
              alt="img5"
            />
            <img
              className="verso"
              src={images[5].tras}
              alt="img5"
            />
          </a>
        </div>
        {/* <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[6].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[6].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[7].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[7].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[8].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[8].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[9].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[9].tras}
              alt=""
            />
          </a>
        </div> */}
      </div>
      <a href="/marcas">
          <button type="button" className="btn-ver-marcas">
            <img src={binoculares}></img>
            <h5>Ver todas as marcas</h5>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Marcas;
