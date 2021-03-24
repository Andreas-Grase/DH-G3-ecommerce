import "./style.css";
import getImages from '../../assets/img/marcas'
const Marcas = () => {
  
  const images = getImages()
  
  return (
    <section className="marcas">
      <div className="titulo-marcas">
        <h2>Nossas Marcas</h2>
        <h4>Encontre as melhores marcas</h4>
      </div>
      <div className="img-marcas">
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={images[0].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[0].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[1].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[1].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[2].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[2].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[3].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[3].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[4].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[4].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
          <img
              className="frente"
              src={images[5].frente}
              alt=""
            />
            <img
              className="verso"
              src={images[5].tras}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
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
        </div>
      </div>
      <button className="btn-ver-marcas" type="button">
        <a href="">
          <i className="fas fa-binoculars fa-3x"></i>
          <h6>Ver todas as marcas</h6>
        </a>
      </button>
    </section>
  );
};

export default Marcas;
