import React, { useState } from "react";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso2 = (props) => {
  const { setPasso } = props;
  return (
    <div>
      <form className="form">
        <h2 className="titulo-do-form-do-passo">Seu endereço</h2>
        <p>CEP</p>
        <input type="text" name="" placeholder="Seu cep" />
        <p>Rua</p>
        <input type="text" name="" placeholder="Sua rua" />
        <p>Complemento</p>
        <input type="text" name="" placeholder="Complemento" />
        <p>Bairro</p>
        <input type="text" name="" placeholder="Seu bairro" />
        <p>Cidade</p>
        <input type="text" name="" placeholder="Sua cidade" />
        <p>Estado</p>
        <input type="text" name="" placeholder="Seu estado" />
      </form>
      <NavButton titulo="voltar" executeFunction={() => setPasso(0)} />
      <NavButton titulo="Próximo" executeFunction={() => setPasso(2)} />
    </div>
  );
};

export default FormPasso2;
