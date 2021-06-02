import React, { useState } from "react";
import logo from "../../../src/assets/icons/logo-gris-claro.svg";
import FormPasso1 from "../../components/cadastro/FormPasso1";
import FormPasso2 from "../../components/cadastro/FormPasso2";
import FormPasso3 from "../../components/cadastro/FormPasso3";
import PainelPassos from "../../components/cadastro/PainelPassos";
import Secundary from "../templates/Secundary";
import "./styles.css";

const Cadastro = () => {
  const [passo, setPasso] = useState(0);
  return (
    <div class="container-externo">
      <div class="container-interno">
        <img
          src={logo}
          className="icone-container-interno"
          width="100"
          height="100"
          alt=""
        />
        <PainelPassos />
        {passo === 0 ? (
        <div className="formularioAtual">
        <FormPasso1 setPasso={setPasso} />
        </div>
        ): null}
        {passo === 1 ? (
        <div className="formularioAtual">
        <FormPasso2 setPasso={setPasso} />
        </div>
        ): null}
        {passo === 2 ? (
        <div className="formularioAtual">
        <FormPasso3 setPasso={setPasso} />
        </div>
        ): null}
      </div>
    </div>
  );
};

const template = () => (
  <Secundary>
    <Cadastro />
  </Secundary>
);
export default template;
