import { Card, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

const MenuLateral = (props) => {
  const { setActivePage } = props;
  return (
    <div className="menu-wrapper">
      <div class="list-group">
        <div class="list-group-item-dark active">Produtos</div>
        <a href="#" class="list-group-item" onClick={() => setActivePage(0)}>
          Listar
        </a>
        <a href="#" class="list-group-item" onClick={() => setActivePage(1)}>
          Ver
        </a>
        <a href="#" class="list-group-item" onClick={() => setActivePage(2)}>
          Adicionar
        </a>
      </div>

      <div class="list-group">
        <div class="list-group-item-dark active">Usuários</div>
        <a href="#" class="list-group-item" onClick={() => setActivePage(3)}>
          Listar
        </a>
        <a href="#" class="list-group-item" onClick={() => setActivePage(4)}>
          Ver
        </a>
        <a href="#" class="list-group-item" onClick={() => setActivePage(5)}>
          Adicionar
        </a>
      </div>

      {/* <Card>
        <Card.Header>
          <b>Painel de Controle</b>
        </Card.Header>
        <ListGroup variant="flush">
          <NavLink to="#" onClick={() => setActivePage(0)} className="navlink">
            Listar
          </NavLink>
          <NavLink to="#" onClick={() => setActivePage(1)} className="navlink">
            Ver
          </NavLink>
          <NavLink to="#" onClick={() => setActivePage(2)} className="navlink">
            Adicionar
          </NavLink>
        </ListGroup>
      </Card> */}
    </div>
  );
};

export default MenuLateral;
