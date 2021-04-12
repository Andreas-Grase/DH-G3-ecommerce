// import MenuLateral from '../../components/MenuLateral'
import Dropdown from "../../components/Dropdown";
import { ProductProvider } from "../../components/ProdutosDOS/context";
import ProductList from "../../components/ProdutosDOS/ProductList";
import Main from "../templates/Main";
import "./style.css";

const Produtos = () => {
  return (
    <div className="bloque-produtos">
      <nav className="produtos-primeira-coluna">
        <Dropdown />
      </nav>

      <div className="produtos-segunda-coluna">
        {/* <div className="titulo-acessorios">
                    <h3>ACESSÓRIOS</h3>
                </div> */}

        <div className="produtos-segunda-coluna-inicio">
          <div className="opcoes-de-exibicao">
            <p className="numero-de-paginas">
              Numero de paginas a exibir
              <a href="/" alt="8">
                {" "}
                8{" "}
              </a>
              <span>/</span>
              <a href="/" alt="25">
                {" "}
                25{" "}
              </a>
              <span>/</span>
              <a href="/" alt="todo">
                {" "}
                TODO
              </a>
            </p>
            <p className="filtrar-exibicao">
              Ordenar por&nbsp;&nbsp;
              <a href="/" alt="ordenar">
                <i class="fas fa-chevron-down"></i>
              </a>
            </p>
          </div>
        </div>

        <div className="produtos-segunda-coluna-fim">
          <ProductProvider>
            <ProductList />
          </ProductProvider>
        </div>
        <div className="proxima-pagina">
          <h3>
            <a href="/" alt="proxima-pagina">
              Próxima página
            </a>
          </h3>
          <i class="fas fa-chevron-circle-right fa-2x"></i>
          {/* <i class="fas fa-chevron-right"></i>
                    <i class="fas fa-chevron-right"></i> */}
        </div>
      </div>
    </div>
  );
};

const template = () => (
  <Main>
    <Produtos />
  </Main>
);
export default template;
