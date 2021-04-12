import NavbarDashboard from '../../components/Navbar/NavbarDashboard';
import MenuLateral from '../../components/Navbar/MenuLateralDashboard';
import Admin from "../templates/Admin"
import './style.css'


const DashboardAdicionar = () => {
    return (
        <>
        <div className = "container-flex">
            <div className = "header-section">
                <div className = "add-icon">
                    <i class="fas fa-file-medical fa-2x" />
                </div>
                <h1 className = "title">Adicionar novo produto</h1>
            </div>
            <div className = "product-info">
                <div className = "add-img">
                    <div className = "image-upload">

                    </div>
                    <button className = "upload-btn">Upload</button>
                </div>
                <div className = "product">
                    <input type="text" className = "product-name" placeholder = "Novo produto"/>
                    <div nameClass = "product-info"></div>
                        <div className = "product-section">
                            <div className = "price">
                                <h3>Preço</h3>
                                <div className = "price-container">
                                    <div className = "icon-container">
                                        <i class="fas fa-dollar-sign fa-1.5x" />
                                    </div>
                                    <input className = "preco" placeholder = " 00,00" />
                                </div>
                                <div className = "price-container">
                                    <div className = "icon-container">
                                        <span>De</span>
                                    </div>
                                        <input type = "date" className = "data-inicio-desconto" />
                                </div>
                            </div>
                            <div className = "discount">
                                <h3>Preço com desconto</h3>
                                <div className = "discount-container">
                                    <div className = "icon-container">
                                        <i class="fas fa-dollar-sign fa-1.5x" />
                                    </div>
                                    <input className = "preco-desconto" placeholder = "00,00" />
                                </div>
                                <div className = "discount-container">
                                    <div className = "icon-container">
                                        <span>Até</span>
                                    </div>
                                        <input type = "date" className = "data-final-desconto" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className = "categories-container">
                <select className = "categories">
                    <option value = "" disabled selected>Categorias</option>
                    <option value = "">Barbearia</option>
                    <option value = "">Cabelo</option>
                    <option value = "">Lançamentos</option>
                    <option value = "">Pele</option>
                    <option value = "">Unhas</option>
                </select>
            </div>
            <textarea rows = "4" cols = "50" className = "product-description" placeholder = "Insira aqui uma breve descrição do seu produto..." />
        </div>
        </>
    )
};

const template = () => (
  <Admin>
    <DashboardAdicionar />
  </Admin>
);

export default template;
