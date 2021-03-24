import Marcas from "../../components/Marcas";
import Categorias from "../../components/Categorias"
import "./styles.css";
import Ofertas from "../../components/Ofertas";

const Home = () => {
  return (
    <div className="">
          <Categorias />
          <Ofertas />
          <Marcas />
    </div>
  );
}

export default Home;
