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
        <Route path="/shopping__cart" component={Carrinho} />
        {token ? (
          <>
            <Route exact path="/dashboard/produto/criar" component={Criar} />
            <Route exact path="/dashboard/produto/listar" component={Listar} />
            <Route exact path="/dashboard/usuario/listar" component={ListarUsuario} />
            <Route exact path="/dashboard/usuario/adicionar" component={AdicionarUsuario} />
            <Route exact path="/shopping__cart/:finalizar__compras/:id" component={FinalizarCompras} />
          </>
        ) : (
            <Route path="/login" component={Login} />
        )}
        <Route path="/categorias/unha" component={Categorias} />
        <Route path="/categorias/pele" component={Categorias} />
        <Route path="/categorias/lacamentos" component={Categorias} />
        <Route path="/categorias/cabelo" component={Categorias} />
        <Route path="/categorias/barbearia" component={Categorias} />
        <Route exact path="/produtos/produto/:id" component={Produto} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/marcas" component={PaginaMarcas} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
