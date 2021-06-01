import { storeProducts } from './data.js';
import "./style.css";

const Product = () => {
    return (
        <>
            <div className="container-products">
                {storeProducts.map((data, key) => {
                    return (
                        <div key={key} className="cardzinho">
                            <a href=""><img src={data.img} alt="Detalhes do Produto" /></a>
                            <h5>{data.title}</h5>
                            <h5>{data.company}</h5>
                            <h5>${data.price}</h5>
                            <button id="boton-carrito" className="btn" href="#">Adicionar ao carrinho <i className="fas fa-cart-plus"></i></button>
                        </div>

                    );
                })}
            </div>
        </>
    );
};

export default Product;