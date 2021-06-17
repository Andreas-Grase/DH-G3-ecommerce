import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css"

const AdicionarUsuario = () => {
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
      //   window.location.pathname = "/usuarios";
      history.push("listar");
      console.log(response);
    } catch (error) {
      if (error.response.data) alert(error.response.data.message);
      else alert("Ops, deu ruim");
    }
  };
  return (
    <div className="container-flex">
    <form className="form-add" onSubmit={handleSubmit}>
      <div className="header-section">
      <div className="add-icon">
        <i class="fas fa-file-medical fa-2x" />
      </div>
      <h2 className="title">Adicionar Usuário</h2>
      </div>
      <div className="form__section__dashboard">
      <div className="primeiro_nome">
        <label id="tag" htmlFor="primeiro_nome">Nome:</label>
        <input
          type="text"
          name="primeiro_nome"
          id="primeiro_nome_dashboard"
          required
          placeholder="Nome"
          value={primeiro_nome}
          onChange={(e) => {
            setPrimeiro_nome(e.target.value);
          }}
        />
      </div>
      <div className="form__sobrenome__dashboard">
        <label id="tag" htmlFor="sobrenome">Sobrenome:</label>
        <input
          type="text"
          name="sobrenome"
          id="sobrenome_dashboard"
          required
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className="form__cpf__dashboard">
        <label id="tag" htmlFor="cpf">CPF:</label>
        <input
          type="text"
          name="cpf"
          id="cpf_dashboard"
          required
          placeholder="Seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div className="form__aniversario__dashboard">
        <label id="tag" htmlFor="aniversario">Data de Aniverário:</label>
        <input
          type="date"
          name="aniversario"
          id="aniversario_dashboard"
          required
          placeholder="Aniversário"
          value={aniversario}
          onChange={(e) => setAniversario(e.target.value)}
        />
      </div>
      <div className="form__email__dashboard">
        <label id="tag" htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email_dashboard"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__senha__dashboard">
        <label id="tag" htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha_dashboard"
          required
          placeholde="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="btn-back">
        <button id="back">Salvar</button>
      </div>
      </div>
    </form>
    </div>
  );
};

export default AdicionarUsuario;
