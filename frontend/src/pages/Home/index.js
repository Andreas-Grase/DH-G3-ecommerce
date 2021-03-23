import Footer from "../../components/Footer";
import Marcas from "../../components/Marcas";
import Categorias from "../../components/Categorias"
import "./styles.css";

const Home = () => {
  return (
    <>
          <Categorias />
          <Marcas />          
          <Footer />
    </>
  );
}

export default Home;
