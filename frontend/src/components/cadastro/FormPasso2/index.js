import React, { useState } from "react";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso2 = (props) => {
  const { setPasso } = props;
  return (
    <div>
      <form className="form">
        <h2 className="titulo-do-form-do-passo">Seu endereço</h2>
        <div>
        <p>CEP</p>
        <input type="text" name="" placeholder="Seu cep" />
        </div>
        <div>
        <p>Rua</p>
        <input type="text" name="" placeholder="Sua rua" />
        </div>
        <div>
        <p>Complemento</p>
        <input type="text" name="" placeholder="Complemento" />
        </div>
        <div>
        <p>Bairro</p>
        <input type="text" name="" placeholder="Seu bairro" />
        </div>
        <div>
        <p>Cidade</p>
        <input type="text" name="" placeholder="Sua cidade" />
        </div>
        <div>
        <p>Estado</p>
        <input type="text" name="" placeholder="Seu estado" />
        </div>
      </form>
      <div className="buttons">
      <NavButton titulo="voltar" executeFunction={() => setPasso(0)} />
      <NavButton titulo="Próximo" executeFunction={() => setPasso(2)} />
      </div>
    </div>
  );
};

export default FormPasso2;
