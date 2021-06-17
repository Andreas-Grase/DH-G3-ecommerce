import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Carrinho from "../pages/Carrinho";
import FinalizarCompras from "../pages/Carrinho/FinalizarCompras";
import Contato from "../pages/Contato";
// import DashboardAtualizar from '../pages/DashboardAtualizar'
// import DashboardDeletar from '../pages/DashboardDeletar'
import Listar from "../pages/dashboard/ListarProduto";
import ListarUsuario from "../pages/dashboard/ListarUsuario";
import AdicionarUsuario from "../pages/dashboard/AdicionarUsuario";
import Criar from "../pages/dashboard/CriarProduto";
// import DashboardVer from '../pages/DashboardVer'
import Home from "../pages/Home";
import Login from "../pages/Login";
import PaginaMarcas from "../pages/PaginaMarcas";
import Produtos from "../pages/Produtos";
import Produto from "../pages/Produto";
import Sobre from "../pages/Sobre";
import Categorias from "../pages/Categorias";
import { getToken } from "../helpers/session";

const Routes = () => {
  const [token, setToken] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setToken(getToken);
    // setIsAdmin(isAdmin);
  }, []);
  return (
    <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route path="/produtos/produto/:id" component={Produto} />
          <Route exact path="/produtos" component={Produtos} />
          <Route path="/marcas" component={PaginaMarcas} />
          <Route path="/categorias" component={Categorias} />
      {token ? (
        <>
          <Route path="/shopping__cart/:finalizar__compras/:id" component={FinalizarCompras} />
          <Route exact path="/shopping__cart" component={Carrinho} />
          <Route path="/dashboard/produto/criar" component={Criar} />
          <Route path="/dashboard/produto/listar" component={Listar} />
          <Route path="/dashboard/usuario/listar" component={ListarUsuario} />
          <Route path="/dashboard/usuario/adicionar" component={AdicionarUsuario} />
        </>
      ) : null}
    </Switch>
  );
};

export default Routes;
