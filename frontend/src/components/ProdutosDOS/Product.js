import "./style.css";
import getImagesProducts from "../../assets/img/produtos";

const Product = ({ produtos }) => {
  const images = getImagesProducts();
  return (
    <>
      <div className="container-products">
        {produtos.map((produto, idx) => {
          return (
            <div key={idx} id={`produto${produto.id}`} className="cardzinho">
              <a href="/produtos">
                <img
                  className="produto"
                  src={images[0].produto}
                  alt="Detalhes do Produto"
                />
              </a>
              <h5>{produto.nome}</h5>
              <h5>{produto.marca}</h5>
              <h5>${produto.preco}</h5>
              <button id="boton-carrito" className="btn" href="#">
                Adicionar ao carrinho <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
