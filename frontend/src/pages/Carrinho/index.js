import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Compras from "../../components/Compras";
import "./style.css";

const Carrinho = () => {
    return (
      <>
        <small>Este é o seu carrinho!</small>  
        <Header />
        <Compras />
        <Footer />
      </>
    );
  };
  
  export default Carrinho;