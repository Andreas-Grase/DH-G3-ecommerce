// import MenuLateral from '../../components/MenuLateral'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../components/Dropdown";
import ProductList from "../../components/ProdutosDOS/ProductList";
import Main from "../templates/Main";
import "./style.css";

const Produtos = () => {
  const [data, setData] = useState({ produtos: [] });
  const [search, setSearch] = useState("");
  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios.get("/produtos").then((res) => setData(res.data));
    const getData = async () => {
      try {
        const response = await axios.get("/produtos");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.post("/produtos/search", {
        searchParam: "nome",
        searchValue: search,
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
              Página{" "}
              <b>
                {data.page} de {data.pages}
              </b>{" "}
              | Exibindo{" "}
              <b>
                {data.produtos.length} de {data.total}
              </b>{" "}
              produtos encontrados
            </p>
            <div id="search__box">
              <input
                type="search"
                placeholder="Procure seus produtos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span class="fa fa-search" onClick={handleSearch}></span>
            </div>
            {/* <p className="filtrar-exibicao">
              Ordenar por&nbsp;&nbsp;
              <a href="/" alt="ordenar">
                <i class="fas fa-chevron-down"></i>
              </a>
            </p> */}
          </div>
        </div>

        <div className="produtos-segunda-coluna-fim">
          <ProductList produtos={data.produtos} />
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
