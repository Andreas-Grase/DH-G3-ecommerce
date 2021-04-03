import {
  Card,
  ListGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import style from './style.css'

const MenuLateral = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Painel de Controle</Card.Header>
      <ListGroup variant="flush">
        <NavLink to="/dashboard" className="navlink">Página Inicial</NavLink>
        <NavLink to="/dashboard/ver__produtos" className="navlink">Ver Produtos</NavLink>
        <NavLink to="/dashboard/listar__produtos" className="navlink">Listar Produtos</NavLink>
        <NavLink to="/dashboard/adicionar__produtos" className="navlink">Adicionar Produtos</NavLink>
        <NavLink to="/dashboard/deletar__produtos" className="navlink">Deletar Produtos</NavLink>
        <NavLink to="/dashboard/atualizar__produtos" className="navlink">Atualizar Produtos</NavLink>
      </ListGroup>
    </Card>
  );
};

export default MenuLateral;
