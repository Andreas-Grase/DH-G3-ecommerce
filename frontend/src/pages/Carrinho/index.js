import Compras from "../../components/Compras";
import Main from "../templates/Main";
import "./style.css";

const Carrinho = () => {
  return (
    <>
      <Compras />
    </>
  );
};

const template = () => (
  <Main>
    <Carrinho />
  </Main>
);
export default template;
