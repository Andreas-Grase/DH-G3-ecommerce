import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso3 = (props) => {
  const { setPasso } = props;
  const history = useHistory();
  return (
    <div>
      <form className="form">
        <h2 className="titulo-do-form-do-passo">Email de confirmação</h2>
        <p>
          Você receberá um e-mail para confirmar seu cadastro. Acesse-o para
          ativar a sua conta.
        </p>
      </form>
      <NavButton titulo="voltar" executeFunction={() => setPasso(1)} />
      <NavButton titulo="Próximo" executeFunction={() => history.push("/")} />
    </div>
  );
};

export default FormPasso3;
