import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Marcas from "../../components/Marcas";
import Categorias from "../../components/Categorias";
import SliderHome from "../../components/Slider";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <SliderHome />
      <Categorias />
      <Marcas />
      <Footer />
    </>
  );
};

export default Home;
