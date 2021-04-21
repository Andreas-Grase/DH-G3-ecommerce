import { NavLink } from "react-router-dom";
import "./style.css";
import getImages from "../../assets/img/marcas";
const MarcasDOS = () => {
  const images = getImages();

  return (
    <section className="marcas">
      <div className="cards">
        <div className="img-marcas">
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[0].frente} alt="" />
              <img className="verso" src={images[0].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[1].frente} alt="" />
              <img className="verso" src={images[1].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[2].frente} alt="" />
              <img className="verso" src={images[2].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[3].frente} alt="" />
              <img className="verso" src={images[3].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[4].frente} alt="" />
              <img className="verso" src={images[4].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[5].frente} alt="" />
              <img className="verso" src={images[5].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[6].frente} alt="" />
              <img className="verso" src={images[6].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[7].frente} alt="" />
              <img className="verso" src={images[7].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[8].frente} alt="" />
              <img className="verso" src={images[8].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[9].frente} alt="" />
              <img className="verso" src={images[9].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[10].frente} alt="" />
              <img className="verso" src={images[10].tras} alt="" />
            </NavLink>
          </div>
          <div className="imagem">
            <NavLink to="/produtos">
              <img className="frente" src={images[11].frente} alt="" />
              <img className="verso" src={images[11].tras} alt="" />
            </NavLink>
          </div>
        </div>
        {/* 
            <button type="button" className="btn-ver-marcas">
              <img src={binoculares}></img>
              <h6>Ver todas as marcas</h6>
            </button>
           */}
      </div>
    </section>
  );
};

export default MarcasDOS;
