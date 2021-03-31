import ListaProdutos from '../../components/ListaProdutos'
import MenuLateral from '../../components/MenuLateral'
import './style.css'

const Produtos = () => {
    return (
        <main>
            <section className="produtos-primeira-coluna">
                <MenuLateral />
            </section>

            <section className="produtos-segunda-coluna">
                <div className="produtos-segunda-coluna-inicio">
                    <h3>ACESSÓRIOS</h3>
                    <div>
                        <nav>Numero de paginas a exibir</nav>
                        <nav>Ordenar por</nav>
                    </div>
                </div>
            
                <div className="produtos-segunda-coluna-fim">
                    <ListaProdutos />
                    <ListaProdutos />
                    <ListaProdutos />
                    <ListaProdutos />
                </div>
            </section>      
        </main>
    )
}

export default Produtos