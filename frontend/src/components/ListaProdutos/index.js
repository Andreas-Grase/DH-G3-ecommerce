import img1 from '../../assets/img/catalogoProdutos/img1.jpg'
import { NavLink } from 'react-router-dom'
import './style.css'

const ListaProdutos = () => {

    return (
        
        <article className="card">
          
                <NavLink to="/produtos/:produto_detalhado">
                    <img src={img1} alt="" className="detalhes-do-produto" />
                </NavLink>
                <div className="card-paragraph">
                    <p>Descrição</p>
                    <p>Preço</p>
                </div>
                <NavLink to="/shopping__cart" className="btn-adicionarAoCarrinho">
                    Adicionar ao carrinho &nbsp;<i class="fas fa-cart-plus"></i>       
                </NavLink>
                
        </article>

    )
}

export default ListaProdutos
