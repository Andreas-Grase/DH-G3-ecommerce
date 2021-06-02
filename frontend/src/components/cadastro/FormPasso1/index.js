import React, { useState } from "react";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso1 = (props) => {
  const { setPasso } = props;
  return (
    <div>
      <form className="form">
        <h2 className="titulo-do-form-do-passo">Seu acesso</h2>
        <p>Coloque seu usuário:</p>
        <input type="text" name="" placeholder="Seu nome de usuario" />
        <p>Coloque seu email:</p>
        <input type="email" name="" placeholder="Seu email" />
        <p>Crie uma senha:</p>
        <input type="password" name="" placeholde="Sua senha" />
      </form>
      <NavButton
        className="botao-proximo"
        titulo="Próximo"
        executeFunction={() => setPasso(1)}
      />
    </div>
  );
};

export default FormPasso1;
