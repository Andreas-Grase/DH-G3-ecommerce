import React, { useState } from "react";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso2 = (props) => {
  const { setPasso } = props;
  return (
    <div>
      <form className="form">
        <h2 className="titulo-do-form-do-passo">Seu endereço</h2>
        <div >
        <p>CEP</p>
        <input type="text" name="" placeholder="Seu cep" className="form_cep" />
        </div>
        <div >
        <p>Rua</p>
        <input type="text" name="" placeholder="Sua rua" className="form_rua" />
        </div>
        <div >
        <p>Número</p>
        <input type="text" name="" placeholder="Número" id="form_numero" />
        </div>
        <div >
        <p>Complemento</p>
        <input type="text" name="" placeholder="Complemento" id="form_complemento" />
        </div>
        <div >
        <p>Bairro</p>
        <input type="text" name="" placeholder="Seu bairro" id="form_bairro"/>
        </div>
        <div >
        <p>Cidade</p>
        <input type="text" name="" placeholder="Sua cidade" className="form_cidade" />
        </div>
        <div >
        <p>Estado</p>
        <input type="text" name="" placeholder="Seu estado" className="form_estado"/>
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
