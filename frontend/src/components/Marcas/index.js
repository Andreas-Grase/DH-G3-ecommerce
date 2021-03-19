import marca1 from '../../assets/img/marcas/marca1.png'
import produtomarca1 from '../../assets/img/marcas/produtomarca1.png'
import marca10 from '../../assets/img/marcas/marca10.png'
import produtomarca10 from '../../assets/img/marcas/produtomarca10.png'
import marca5 from '../../assets/img/marcas/marca5.png'
import produtomarca5 from '../../assets/img/marcas/produtomarca5.png'
import marca7 from '../../assets/img/marcas/marca7.png'
import produtomarca7 from '../../assets/img/marcas/produtomarca7.png'
import marca9 from '../../assets/img/marcas/marca9.png'
import produtomarca9 from '../../assets/img/marcas/produtomarca9.png'
import marca12 from '../../assets/img/marcas/marca12.png'
import produtomarca12 from '../../assets/img/marcas/produtomarca12.png'
import marca2 from '../../assets/img/marcas/marca2.png'
import produtomarca2 from '../../assets/img/marcas/produtomarca2.png'
import marca4 from '../../assets/img/marcas/marca4.png'
import produtomarca4 from '../../assets/img/marcas/produtomarca4.png'
import marca6 from '../../assets/img/marcas/marca6.png'
import produtomarca6 from '../../assets/img/marcas/produtomarca6.png'
import marca8 from '../../assets/img/marcas/marca8.png'
import produtomarca8 from '../../assets/img/marcas/produtomarca8.png'
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
              src={marca10}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca10}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca5}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca5}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca7}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca7}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca9}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca9}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca12}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca12}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca2}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca2}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca4}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca4}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca6}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca6}
              alt=""
            />
          </a>
        </div>
        <div className="imagem">
          <a href="">
            <img
              className="frente"
              src={marca8}
              alt=""
            />
            <img
              className="verso"
              src={produtomarca8}
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
