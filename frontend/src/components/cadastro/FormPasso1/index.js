import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavButton } from "../../../components/Button";
import "../../cadastro/styles.css";

const FormPasso1 = (props) => {
  const { setPasso } = props;
  const [primeiro_nome, setPrimeiro_nome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [aniversario, setAniversario] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    // alert("Você submeteu o form");
    e.preventDefault();
    console.log("entrando");
    try {
      const response = await axios.post("/usuarios", {
        primeiro_nome,
        sobrenome,
        email,
        senha,
        cpf,
        aniversario,
      });
      //   window.location.pathname = "dashboard/usuario/listar";
      history.push("dashboard/usuario/listar");
      console.log(response);
    } catch (error) {
      if (error.response.data) alert(error.response.data.message);
      else alert("Ops, deu ruim");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="titulo-do-form-do-passo">Seu acesso</h2>
        <div className="form__primeiro_nome">
          <label htmlFor="primeiro_nome">Coloque seu nome:</label>
          <input
            type="text"
            name="primeiro_nome"
            id="primeiro_nome"
            required
            placeholder="Seu nome"
            value={primeiro_nome}
            onChange={(e) => {
              setPrimeiro_nome(e.target.value);
            }}
          />
        </div>
        <div className="form__sobrenome">
          <label htmlFor="sobrenome">Coloque seu sobrenome:</label>
          <input
            type="text"
            name="sobrenome"
            id="sobrenome"
            required
            placeholder="Seu sbrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>
        <div className="form__cpf">
          <label htmlFor="cpf">Coloque seu CPF:</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            required
            placeholder="Seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="form__aniversario">
          <label htmlFor="aniversario">Coloque sua data de aniverário:</label>
          <input
            type="date"
            name="aniversario"
            id="aniversario"
            required
            placeholder="Seu aniversário"
            value={aniversario}
            onChange={(e) => setAniversario(e.target.value)}
          />
        </div>
        <div className="form__email">
          <label htmlFor="email">Coloque seu email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__senha">
          <label htmlFor="senha">Crie uma senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            placeholde="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div id="btn-back">
          <button id="back">Salvar</button>
        </div>
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
