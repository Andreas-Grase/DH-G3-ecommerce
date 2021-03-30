import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Carrinho from '../pages/Carrinho'
import FinalizarCompras from '../pages/Carrinho/FinalizarCompras'
import Login from '../pages/Login'

const Routes = () => {
  return (    
      <Switch>
        <Route exact path="/shopping__cart/:finalizar__compras" component={FinalizarCompras}/>
        <Route path="/shopping__cart" component={Carrinho}/>
        {/* <Route exact path="/categorias/:categoria/:produtos/:promocoes" component={Promoções}/> */}
        {/* <Route exact path="/categorias/:categoria/:produtos" component={Produtos}/> */}
        {/* <Route exact path="/categorias/:categoria/:marcas" component={Marcas}/> */}
        {/* <Route exact path="/categorias/:categoria?" component={Categoria}/> */}
        {/* <Route path="/contato" component={Contato}/> */}
        {/* <Route path="/sobre" component={Sobre}/> */}
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
  )
}

export default Routes