import "./style.css";
import truck from "../../assets/img/carrinho/icon-truck.svg";
import produto from "../../assets/img/carrinho/produto-carrinho.jpeg";

const Compras = () => {
    return (
        <main>
            <br />
            <h4 class="titulo"> Este é o seu carrinho!</h4>
            <div class="flex-container">
                <div class="flex-item">
                    <table class="table align-middle">
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
                <div class="flex-item">
                    <h4 class="mensagem2">Resumo do Carrinho</h4>
                    <div className="container-resumo-carrinho">
                        <table className="resumo" class="table table-borderless">
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
                    <hr />
                    <div class="calcule-frete">
                        <img class="truck-icon" src={truck} alt="frete"/>
                        <label>Calcule o frete</label>
                    </div>
                    <br />
                    <form>
                        <div class="form-frete">
                            <input type="text" class="form-input" placeholder="Digite o seu CEP"/>
                        </div> 
                        <div class="button">
                        <button type="submit" class="button">Calcular</button>
                        </div>  
                    </form>
                    <hr />
                    <form>
                        <h4 class="mensagem2">Cupom de desconto</h4>
                        <h5 class="subtitle">Informe seu Cupom de Desconto</h5> 
                        <br />
                        <div class="form-cupom">
                            <input type="text" class="form-input" placeholder="Inserir código do cupom"/>
                        </div> 
                        <div class="button">
                        <button type="submit" class="button">Ok</button>
                        </div>
                    </form>
                    <hr />
                    <div class="button-end">
                        <button class="button-finalizar">Finalizar compra</button>
                        <br />
                        <button class="button-continuar">Continuar comprando</button>
                    </div>
                </div>    
            </div>
        </main>    
    )
}

export default Compras;

