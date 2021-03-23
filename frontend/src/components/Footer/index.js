import logo from '../../assets/icons/logo-nome.svg'
import './style.css'

const Footer = () => {
    return (
        <footer>
            {/* Linha 1 */}
            <div className="linha-footer">
                <img
                    className="footer-logo"
                    src={logo}
                    alt="Logo-Kabellos"
                />
            </div>
            {/* Linha 2 */}
            <div className="linha-footer">
                {/* Columna 1 */}
                {/* <div className="newsletter"> */}
                <div className="coluna-footer  newsletter">
                    <div className="footer-subrow-social">
                        <i class="fab fa-facebook fa-2x"></i>
                        <i class="fab fa-instagram fa-2x"></i>
                        <i class="fab fa-pinterest fa-2x"></i>
                        <i class="fab fa-twitter fa-2x"></i>
                        <i class="fab fa-youtube fa-2x"></i>
                    </div>
                    <div className="footer-subrow-newsletter">
                        <form action="/" className="tbox">
                            <legend className="form__content__legend">Novidades e Promoções</legend>
                            <p className="texto-newsletter">Assine nossa newsletter para ficar por dentro das novidades e receber promoções exclusivas</p>
                            <input type="text" className="form__content__input" name="nome" id="nome" value="Insira seu nome" />
                            <input type="text" className="form__content__input" name="email" id="email" value="Insira seu e-mail" />
                            <button className="form__content__btn">Quero desconto!</button>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
                {/* Columna 2 */}
                <div className="footer-nav">
                    <div className="coluna-footer">
                        <ul className="lista">
                            <li>MINHA CONTA</li>
                            <li>Meus dados pessoais</li>
                            <li>Meus pedidos</li>
                            <li>Rastrear pedidos</li>
                        </ul>
                    </div>
                    {/* Columna 3 */}
                    <div className="coluna-footer">
                        <ul className="lista">
                            <li>EMPRESA</li>
                            <li>Quem somos</li>
                            <li>Trabalhe conosco</li>
                        </ul>
                    </div>
                    {/* Columna 4 */}
                    <div className="coluna-footer">
                        <ul className="lista">
                            <li>INFORMAÇÕES</li>
                            <li>Central de relacionamento</li>
                            <li>Trocas e devoluções</li>
                            <li>Termos de uso</li>
                            <li>Políticas de privacidade</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Linha 3 */}
            <div className="linha-footer contato">
                {/* Columna 1 */}

                <div className="coluna-footer">
                    <h4>Endereço</h4>
                    <ul className="lista">
                        <li>Av. Domingos Odália Filho, 301</li>
                        <li>Centro, Osasco - SP, 06010-067</li>
                    </ul>
                </div>
                {/* Columna 2 */}
                <div className="coluna-footer">
                    <h4>Atenção ao cliente</h4>
                    <ul className="lista">
                        <li>Telefones: 0800 XXXX-XXXX</li>
                        <li>E-mail: sac@kabellos.com.br</li>
                        <li>Segunda a Sexta das 9h às 17h</li>
                    </ul>
                </div>
                {/* Columna 3 */}
                <div className="coluna-footer">
                    <h4>Ajuda com a sua compra</h4>
                    <ul className="lista">
                        <li>Telefones: 0800 XXXX-XXXX</li>
                        <li>E-mail: sac@kabellos.com.br</li>
                        <li>Segunda a Sexta das 9h às 17h</li>
                    </ul>
                </div>

            </div>
            {/* Linha 4 */}
            <div className="linha-footer categorias">
                <h4 className="">Visualizar todas as categorias&nbsp;</h4>
                <i class="fas fa-angle-double-right fa-2x"></i>
            </div>
            {/* Linha 5 */}
            <div className="linha-footer trans">
                <div className="cartoes">
                    <p>Formas de pagamento</p>
                    <i class="fab fa-cc-visa fa-2x"></i>
                    <i class="fab fa-cc-mastercard fa-2x"></i>
                    <i class="fab fa-cc-mastercard fa-2x"></i>
                    <i class="fab fa-cc-diners-club fa-2x"></i>
                    <i class="fab fa-cc-paypal fa-2x"></i>
                </div>
                <div className="ambiente-protegido">
                    <p>Ambiente protegido</p>
                    <i class="fas fa-shield-alt fa-2x"></i>
                    <i class="fas fa-lock fa-2x"></i>
                    <i class="fas fa-user-shield fa-2x"></i>
                </div>
            </div>
            {/* Linha 6 */}
            <div className="linha-footer linha-footer-final">
                <p className="coluna-copyright">
                    {new Date().getFullYear()} &copy; EQUIPE 3 &nbsp; | &nbsp; Todos os direitos reservados
                    </p>
            </div>
        </footer>
    )
}

export default Footer
