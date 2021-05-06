import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Carrinho from '../pages/Carrinho'
import FinalizarCompras from '../pages/Carrinho/FinalizarCompras'
import Contato from '../pages/Contato'
import Dashboard from '../pages/Dashboard'
// import DashboardAdicionar from '../pages/DashboardAdicionar'
// import DashboardAtualizar from '../pages/DashboardAtualizar'
// import DashboardDeletar from '../pages/DashboardDeletar'
// import DashboardListar from '../pages/DashboardListar'
// import DashboardVer from '../pages/DashboardVer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PaginaMarcas from '../pages/PaginaMarcas'
import Produtos from '../pages/Produtos'
import Produto from '../pages/Produto'
import Sobre from '../pages/Sobre'
import Categorias from '../pages/Categorias'

const Routes = () => {
  return (    
      <Switch>
        <Route exact path="/shopping__cart/:finalizar__compras/:id" component={FinalizarCompras}/>
        <Route path="/shopping__cart" component={Carrinho}/>
        {/* <Route exact path="/categorias/:categoria/:produtos/:promocoes" component={Promoções}/> */}
        {/* <Route exact path="/categorias/:categoria/:produtos" component={Produtos}/> */}
        {/* <Route exact path="/categorias/:categoria/:marcas" component={Marcas}/> */}
        {/* <Route exact path="/categorias/:categoria?" component={Categoria}/> */}
        {/* <Route path="/produtos/:produto_detalhado" component={ProdutoDetalhado} */}  
        {/* <Route exact path="/dashboard/produto/atualizar/:id" component={DashboardAtualizar} /> */}
        {/* <Route exact path="/dashboard/produto/deletar/:id" component={DashboardDeletar} /> */}
        {/* <Route exact path="/dashboard/produto/adicionar" component={DashboardAdicionar} /> */}
        {/* <Route exact path="/dashboard/produto/listar" component={DashboardListar} /> */}
        {/* <Route exact path="/dashboard/produto/ver/:id" component={DashboardVer} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/categorias/unha" component={Categorias} />
        <Route path="/categorias/pele" component={Categorias} />
        <Route path="/categorias/lacamentos" component={Categorias} />
        <Route path="/categorias/cabelo" component={Categorias} />
        <Route path="/categorias/barbearia" component={Categorias} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/marcas" component={PaginaMarcas} />
        <Route exact path="/produtos/produto/:id" component={Produto} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/contato" component={Contato}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/" component={Home} />
      </Switch>
  )
}

export default Routes