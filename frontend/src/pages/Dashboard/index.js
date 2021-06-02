import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuLateral from "../../../src/components/Navbar/MenuLateralDashboard";
import AdicionarProduto from "../../components/dashboards/AdicionarProduto";
import AtualizarProduto from "../../components/dashboards/AtualizarProduto";
import ListarProduto from "../../components/dashboards/ListarProduto";
import VerProduto from "../../components/dashboards/VerProduto";
import Admin from "../templates/Admin";
import "./style.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState(0);
  const [data, setData] = useState({ produtos: [] });
  useEffect(() => {
    // fetch("/produtos/dashboard")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios
    //   .get("/produtos/dashboard")
    //   .then((res) => setData(res.data))
    //   .catch((error) => console.log(error));
    const getData = async () => {
      try {
        const response = await axios.get("/produtos/dashboard");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
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
        <AdicionarProduto setActivePage={setActivePage} produtos={data.produtos} />
      ) : null}
      {activePage === 3 ? (
        <AtualizarProduto setActivePage={setActivePage} produtos={data.produtos} />
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
