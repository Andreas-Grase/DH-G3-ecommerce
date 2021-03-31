import ListaProdutos from '../../components/ListaProdutos'
import MenuLateral from '../../components/MenuLateral'
import './style.css'

const Produtos = () => {
    return (
        <main className="bloque-produtos">
            <section className="produtos-primeira-coluna">
                <MenuLateral />
            </section>

            <section className="produtos-segunda-coluna">
                
                <div className="titulo-acessorios">
                    <h3>ACESSÓRIOS</h3>
                </div>

                <div className="produtos-segunda-coluna-inicio">
                    <div className="opcoes-de-exibicao">
                        <p className="numero-de-paginas">Numero de paginas a exibir 
                            <a href="" alt=""> 10 </a><span>/</span>
                            <a href="" alt=""> 25 </a><span>/</span>
                            <a href="" alt=""> TODO</a>
                        </p>
                        <p className="filtrar-exibicao">Ordenar por&nbsp;&nbsp;
                            <a href="" alt=""><i class="fas fa-chevron-down"></i></a>
                        </p>
                    </div>
                </div>
        
            
                <div className="produtos-segunda-coluna-fim">
                    <ListaProdutos />
                    <ListaProdutos />
                    <ListaProdutos />
                    <ListaProdutos />
                    <ListaProdutos />
                    <ListaProdutos />
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