import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Carrinho from '../pages/Carrinho'
import Cadastro from '../pages/Cadastro'

const Routes = () => {
  return (    
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/shopping__cart" component={Carrinho} />
        <Route path="/" component={Home} />
      </Switch>
  )
}

export default Routes