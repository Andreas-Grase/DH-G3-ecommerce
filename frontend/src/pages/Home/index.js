import Categorias from "../../components/Categorias";
import Marcas from "../../components/Marcas";
import Ofertas from "../../components/Ofertas";
import SliderHome from "../../components/Slider";
import Main from "../templates/Main";
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
const template = () => (
  <Main>
    <Home />
  </Main>
);
export default template;
