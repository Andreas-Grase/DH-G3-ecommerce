import img1 from '../../assets/img/catalogoProdutos/img1.jpg'
import { NavLink } from 'react-router-dom'
import './style.css'

const ListaProdutos = () => {

    return (
        
        <article className="card">
          
                <NavLink to="/produto" className="detalhes-do-produto">
                    <img src={img1} alt="" />
                    <p className="card-paragraph">Descrição</p>
                    <p className="card-paragraph">Preço</p>
                </NavLink>
               
                <NavLink to="/shopping__cart" className="btn-adicionarAoCarrinho">
                    Adicionar ao carrinho &nbsp;<i class="fas fa-cart-plus"></i>       
                </NavLink>
                
        </article>

    )
}

export default ListaProdutos