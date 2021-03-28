import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Marcas from "../../components/Marcas";
import Categorias from "../../components/Categorias";
import Ofertas from "../../components/Ofertas";
import SliderHome from "../../components/Slider";
import FinalizarCompras from "../Carrinho/FinalizarCompras"
import "./styles.css";


const Home = () => {
  return (
    <>
      <SliderHome />
      <Categorias />
      <Ofertas />
      <Marcas />
    </>
  );
};

export default Home;
