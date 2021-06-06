import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuLateral from "../../../src/components/Navbar/MenuLateralDashboard";
import AdicionarProduto from "../../components/dashboards/produtos/AdicionarProduto";
import ListarProduto from "../../components/dashboards/produtos/ListarProduto";
import VerProduto from "../../components/dashboards/produtos/VerProduto";
import List from "../../components/dashboards/usuarios/List";
import Admin from "../templates/Admin";
import "./style.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState(0);
  const [data, setData] = useState({ produtos: [] });
  const [dataUsers, setDataUsers] = useState({ usuarios: [] });
  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios
    //   .get("/produtos")
    //   .then((res) => setData(res.data))
    //   .catch((error) => console.log(error));
    const getData = async () => {
      try {
        const response = await axios.get("/produtos");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios
    //   .get("/produtos")
    //   .then((res) => setData(res.data))
    //   .catch((error) => console.log(error));
    const getDataUsers = async () => {
      try {
        const response = await axios.get("/usuarios");
        setDataUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUsers();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <MenuLateral setActivePage={setActivePage} />
      {activePage === 0 ? (
        <ListarProduto setActivePage={setActivePage} produtos={data.produtos} />
      ) : null}
      {activePage === 1 ? (
        <VerProduto setActivePage={setActivePage} produtos={data.produtos} />
      ) : null}
      {activePage === 2 ? (
        <AdicionarProduto
          setActivePage={setActivePage}
          produtos={data.produtos}
        />
      ) : null}
      {activePage === 3 ? (
        <List setActivePage={setActivePage} usuarios={dataUsers.usuarios} />
      ) : null}
      {activePage === 4 ? (
        <List setActivePage={setActivePage} usuarios={dataUsers.usuarios} />
      ) : null}
      {activePage === 5 ? (
        <List setActivePage={setActivePage} usuarios={dataUsers.usuarios} />
      ) : null}
    </div>
  );
};

const template = () => (
  <Admin>
    <Dashboard />
  </Admin>
);
export default template;
