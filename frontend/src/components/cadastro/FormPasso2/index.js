import React, { useState } from "react";
import axios from "axios";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso2 = (props) => {
  const { setPasso } = props;
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/usuarios/endereco", {
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
      });
      setPasso(2);
    } catch (error) {
      if (error.response.data) alert(error.response.data.message);
      else alert("Ops, deu ruim");
    }
  };

  return (
    <div>
      <form className="form">
        <h2 className="titulo-do-form-do-passo">Seu endereço</h2>
        <div>
          <p>CEP</p>
          <input
            type="text"
            name="cep"
            className="form_cep"
            id="cep"
            required
            placeholder="Seu cep"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Rua</p>
          <input
            type="text"
            name="rua"
            className="form_rua"
            id="rua"
            required
            placeholder="Sua rua"
            value={rua}
            onChange={(e) => {
              setRua(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Número</p>
          <input
            type="text"
            name="numero"
            className="form_numero"
            id="form_numero"
            required
            placeholder="Sua numero"
            value={numero}
            onChange={(e) => {
              setNumero(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Complemento</p>
          <input
            type="text"
            name="complemento"
            className="form_complemento"
            id="form_complemento"
            required
            placeholder="Sua complemento"
            value={complemento}
            onChange={(e) => {
              setComplemento(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Bairro</p>
          <input
            type="text"
            name="bairro"
            className="form_bairro"
            id="form_bairro"
            required
            placeholder="Sua bairro"
            value={bairro}
            onChange={(e) => {
              setBairro(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Cidade</p>
          <input
            type="text"
            name="cidade"
            className="form_cidade"
            id="cidade"
            required
            placeholder="Sua cidade"
            value={cidade}
            onChange={(e) => {
              setCidade(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Estado</p>
          <input
            type="text"
            name="estado"
            className="form_estado"
            id="estado"
            required
            placeholder="Sua estado"
            value={uf}
            onChange={(e) => {
              setUf(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="buttons">
        <NavButton titulo="voltar" executeFunction={() => setPasso(0)} />
        <NavButton titulo="Próximo" executeFunction={() => handleSubmit()} />
      </div>
    </div>
  );
};

export default FormPasso2;
