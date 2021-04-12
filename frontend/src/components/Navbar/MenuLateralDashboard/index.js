import {
  Card,
  ListGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import './style.css'

const MenuLateral = () => {
  return (
    <div className = "menu-wrapper">
      <Card style={{ width: "18rem" }}>
        <Card.Header>Painel de Controle</Card.Header>
        <ListGroup variant="flush">
          <NavLink to="/dashboard" className="navlink">Página Inicial</NavLink>
          <NavLink to="/dashboard/produto/ver/:id" className="navlink">Ver Produtos</NavLink>
          <NavLink to="/dashboard/produto/listar" className="navlink">Listar Produtos</NavLink>
          <NavLink to="/dashboard/produto/adicionar" className="navlink">Adicionar Produtos</NavLink>
          <NavLink to="/dashboard/produto/deletar/:id" className="navlink">Deletar Produtos</NavLink>
          <NavLink to="/dashboard/produto/atualizar/:id" className="navlink">Atualizar Produtos</NavLink>
        </ListGroup>
      </Card>
    </div>
  );
};

export default MenuLateral;
