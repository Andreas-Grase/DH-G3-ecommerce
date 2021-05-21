import { Card, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

const MenuLateral = (props) => {
  const { setActivePage } = props;
  return (
    <div className="menu-wrapper">
      <Card>
        <Card.Header>
          <b>Painel de Controle</b>
        </Card.Header>
        <ListGroup variant="flush">
          <NavLink to="#" onClick={() => setActivePage(0)} className="navlink">
            Listar Produtos
          </NavLink>
          <NavLink to="#" onClick={() => setActivePage(1)} className="navlink">
            Ver Produto
          </NavLink>
          <NavLink to="#" onClick={() => setActivePage(2)} className="navlink">
            Adicionar Produto
          </NavLink>
          <NavLink to="#" onClick={() => setActivePage(3)} className="navlink">
            Atualizar Produto
          </NavLink>
        </ListGroup>
      </Card>
    </div>
  );
};

export default MenuLateral;
