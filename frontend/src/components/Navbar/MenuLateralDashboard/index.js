import "./style.css";

const MenuLateral = () => {
  return (
    <div className="menu-wrapper">
      <div class="list-group">
        <div class="list-group-item-dark active">
          <b>Produtos</b>
        </div>
        <a href="/dashboard/produto/listar" class="list-group-item">
          Listar
        </a>
        <a href="#" class="list-group-item">
          Ver
        </a>
        <a href="/dashboard/produto/criar" class="list-group-item">
          Adicionar
        </a>
      </div>
      <div class="list-group">
        <div class="list-group-item-dark active">
          <b>Usuários</b>
        </div>
        <a href="/dashboard/usuario/listar" className="list-group-item">
          Listar
        </a>
        <a href="#" className="list-group-item">
          Ver
        </a>
        <a href="/dashboard/usuario/adicionar" className="list-group-item">
          Adicionar
        </a>
      </div>
    </div>
  );
};

export default MenuLateral;
