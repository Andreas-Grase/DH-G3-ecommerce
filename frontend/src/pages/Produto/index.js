import Main from "../templates/Main"
import Produto from "../../components/Produto";

const PaginaProduto = () => {

    return (
        <Produto />
    )
};

const template = () => (
    <Main>
      <PaginaProduto />
    </Main>
  );
  export default template;