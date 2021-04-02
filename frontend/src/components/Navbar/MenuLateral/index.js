import {
  NavLink,
  Card,
  ListGroup,
} from "react-bootstrap";

const MenuLateral = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Painel de Controle</Card.Header>
      <ListGroup variant="flush">
        <NavLink href="/dashboard" style={{ height: "20px" }} style={{border: "1px solid lightgray"}}>Página Inicial</NavLink>
        <NavLink to="/ver_produtos" style={{ height: "20px" }} style={{border: "1px solid lightgray"}}>Ver Produtos</NavLink>
        <NavLink eventKey="link-2" style={{ height: "20px" }} style={{border: "1px solid lightgray"}}>Listar Produtos</NavLink>
        <NavLink eventKey="link-3" style={{ height: "20px" }} style={{border: "1px solid lightgray"}}>Adicionar Produtos</NavLink>
        <NavLink eventKey="link-4" style={{ height: "20px" }} style={{border: "1px solid lightgray"}}>Deletar Produtos</NavLink>
        <NavLink eventKey="link-5" style={{ height: "20px" }} style={{border: "1px solid lightgray"}}>Atualizar Produtos</NavLink>
      </ListGroup>
    </Card>
  );
};

export default MenuLateral;
