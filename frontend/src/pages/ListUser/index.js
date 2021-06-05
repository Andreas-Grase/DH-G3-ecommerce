import Secundary from "../templates/Secundary";
import List from "../../components/users/List";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css"

const ListUser = () => {
  const [data, setData] = useState({ usuarios: [] });
  useEffect(() => {
    // fetch("/usuarios")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios.get("/usuarios").then((res) => setData(res.data));
    const getData = async () => {
      try {
        const response = await axios.get("/usuarios");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <main>
      <section className="main-section">
        <h2 className="main-section__title">Página de Usuários</h2>
        <h3 className="main-section__subtitle">
          Confira a seguir os usuários cadastrados em nosso banco de dados
        </h3>
      </section>
      <List usuarios={data.usuarios} />
    </main>
  );
};

const template = () => (
  <Secundary>
    <ListUser />
  </Secundary>
);
export default template;
