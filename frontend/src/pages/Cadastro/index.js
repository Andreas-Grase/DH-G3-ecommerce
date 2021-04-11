import FormularioDeCadastro from "../../components/FormularioDeCadastro";
import Secundary from "../templates/Secundary";
import "./styles.css";

const Cadastro = () => {
  return (
    <>
      <FormularioDeCadastro />
    </>
  );
};

const template = () => (
  <Secundary>
    <Cadastro />
  </Secundary>
);
export default template;
