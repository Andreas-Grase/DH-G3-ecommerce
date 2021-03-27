import "./style.css";
import truck from "../../assets/img/carrinho/icon-truck.svg"

const Compras = () => {
    return (
        <main class="page-row page-row-expanded">
            <h3 class="mensagem">Este é o seu carrinho!</h3>
            <div className="tela-carrinho">
                <div className="lista-produtos">
                    <table class="table-sm">
                        <thead>
                            <tr class="titulo-lista">
                                <th>Produto</th>
                                <th>Preço Unitário</th>
                                <th>Quantidade</th>
                                <th>Sub Total </th>
                            </tr>
                        </thead>    
                        <tr>
                            <td><img></img></td>
                            <td>R$10,00</td>
                            <td>2</td>
                            <td>R$20,00</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className="resumo-carrinho">
                    <table className="resumo" class="table-sm">
                        <tr>
                            <th>Sub Total:</th>
                            <td>R$20,00</td>
                        </tr>
                        <tr>
                            <th>Frete:</th>
                            <td>(à calcular)</td>
                        </tr>
                        <tr>
                            <th>Total à vista:</th>
                            <td>R$20,00</td>
                        </tr>
                    </table>
                </div>
                <div class="calcule-frete">
                    <img class="truck-icon" src={truck} alt="frete"/>
                    <label>Calcule o frete</label>
                </div>
                <form>
                   <div class="form-frete">
                        <input type="text" class="form-input" placeholder="Digite o seu CEP"/>
                   </div> 
                   <div class="button">
                       <button type="submit" class="bnt-button">Calcular</button>
                   </div>
                </form>
            </div>
        </main>    
    )
}


export default Compras;

