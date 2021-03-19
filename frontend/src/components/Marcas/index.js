import marca1 from '../../assets/img/marcas/marca1.png'
import produtomarca1 from '../../assets/img/marcas/produtomarca1.png'
import "./style.css";

const Marcas = () => {
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
              src={marca1}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca1}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca10.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca10.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca5.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca5.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca7.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca7.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca9.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca9.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca12.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca12.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca2.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca2.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca4.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca4.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca6.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca6.png"
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src="../../assets/img/marcas/marca8.png"
              alt=""
            />
            <img
              className="verso"
              src="../../assets/img/marcas/produtomarca8.png"
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
