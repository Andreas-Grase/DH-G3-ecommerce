import "./style.css";
import truck from "../../assets/img/carrinho/icon-truck.svg";
import produto from "../../assets/img/carrinho/produto-carrinho.jpeg";

const Compras = () => {
    return (
        <main class="page-row page-row-expanded">
            <br />
            <h4 class="titulo"> Este é o seu carrinho!</h4>
            <div className="container-tela-carrinho">
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
                            <td><img class="produto-escolhido" src={produto} alt="produto" /></td>
                            <td>R$10,00</td>
                            <td>2</td>
                            <td>R$20,00</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div>
                    <h4 class="mensagem2">Resumo do Carrinho</h4>
                    <div className="container-resumo-carrinho">
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
                </div>    
                <hr />
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
                <hr />
                <form>
                    <h5>Cupom de desconto</h5>
                    <h7>Informe seu Cupom de Desconto</h7> 
                    <div class="form-cupom">
                        <input type="text" class="form-input" placeholder="Inserir código do cupom"/>
                    </div> 
                    <div class="button">
                       <button type="submit" class="bnt-button">Ok</button>
                    </div>
                </form>
                <hr />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary btn-sm" type="button">Finalizar compra</button>
                    <br />
                    <button class="btn btn-outline-secondary btn-sm" type="button">Continuar comprando</button>
                </div>
            </div>
        </main>    
    )
}


export default Compras;

