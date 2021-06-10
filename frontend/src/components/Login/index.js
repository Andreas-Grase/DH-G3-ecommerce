import React, { useState } from "react";
import logo from "../../assets/icons/logo-gris-claro.svg";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="conteiner">
      <div className="login">
        <img src={logo} className="usuario" width="100" height="100" alt="" />
        <h1 className="titulo-login">Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Email:</p>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Senha:</p>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="btn__login">
          <button>Entrar</button>
        </div>
        </form>
          <a href="/">Esqueceu sua Senha ?</a>
          <br />
          <a href="/cadastro">Ainda não possue uma conta?</a>
      </div>
    </div>
  );
};

export default Login;
