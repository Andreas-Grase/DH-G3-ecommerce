import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./style.css";

const FinalizarCompras = () => {
  
  return (
    <>
      <Header />
      <div>
        <h2>Detalhes da Sua Compra</h2>
        <h4>Detalhes do envio</h4>
        <div>
            Edereço de entrega
        </div>
        <div>
            Opções de frete
        </div>
        <button>
            Continuar
        </button>
        <h4>Opções de pagamento</h4>
        <div>
        <ul>
        <li>Cartão de crédito</li>
        </ul>
        </div>
        <div>
        <ul>
        <li>Cartão de débito</li>
        </ul>
        </div>
        <div>
        <ul>
        <li>PIX</li>
        </ul>
        </div>
        <div>
        <ul>
        <li>Boleto</li>
        </ul>
        </div>
        <button>
            Continuar
        </button>
        <div>
            <h3>Revise e confirme sua compra</h3>
            <h4>Detalhes do envio</h4>
        </div>
        <div>
            Endereço de entrega
        </div>
        <div>
            Prazo de entrega definido pelo frete escolhido
        </div>
        <div>
            Produto(s) escolhido(s)
        </div>
        <button>
            Confimar a compra
        </button>
      </div>
      <Footer />
    </>
  );
};

export default FinalizarCompras;
