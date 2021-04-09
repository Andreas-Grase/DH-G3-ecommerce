import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Carrinho from '../pages/Carrinho'
import Cadastro from '../pages/Cadastro'
import FinalizarCompras from '../pages/Carrinho/FinalizarCompras'
import Login from '../pages/Login'
import Produtos from '../pages/Produtos'
import Produto from '../pages/Produto'
import PaginaMarcas from '../pages/PaginaMarcas'
import Dashboard from '../pages/DashboardLogin'
import DashboardAdicionar from '../pages/DashboardAdicionar'
import DashboardAtualizar from '../pages/DashboardAtualizar'
import DashboardDeletar from '../pages/DashboardDeletar'
import DashboardListar from '../pages/DashboardListar'
import DashboardVer from '../pages/DashboardVer'
import DashboardLogin from '../pages/DashboardLogin'



const Routes = () => {
  return (    
      <Switch>
        <Route exact path="/shopping__cart/:finalizar__compras" component={FinalizarCompras}/>
        <Route path="/shopping__cart" component={Carrinho}/>
        {/* <Route exact path="/categorias/:categoria/:produtos/:promocoes" component={Promoções}/> */}
        {/* <Route exact path="/categorias/:categoria/:produtos" component={Produtos}/> */}
        {/* <Route exact path="/categorias/:categoria/:marcas" component={Marcas}/> */}
        {/* <Route exact path="/categorias/:categoria?" component={Categoria}/> */}
        {/* <Route path="/produtos/:produto_detalhado" component={ProdutoDetalhado} */}
        <Route exact path="/dashboard/login" component={DashboardLogin} />
        <Route exact path="/dashboard/atualizar__produtos" component={DashboardAtualizar} />
        <Route exact path="/dashboard/deletar__produtos" component={DashboardDeletar} />
        <Route exact path="/dashboard/adicionar__produtos" component={DashboardAdicionar} />
        <Route exact path="/dashboard/listar__produtos" component={DashboardListar} />
        <Route exact path="/dashboard/ver__produtos" component={DashboardVer} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/marcas" component={PaginaMarcas} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/produto" component={Produto} />
        <Route path="/contato" component={Contato}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/" component={Home} />
      </Switch>
  )
}

export default Routes