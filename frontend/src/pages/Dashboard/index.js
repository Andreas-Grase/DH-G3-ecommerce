import React, { useState } from "react";
import Admin from "../templates/Admin";
import MenuLateral from "../../../src/components/Navbar/MenuLateralDashboard"
import ListarProduto from "../../components/dashboards/ListarProduto"
import VerProduto from "../../components/dashboards/VerProduto"
import AdicionarProduto from "../../components/dashboards/AdicionarProduto"
import AtualizarProduto from "../../components/dashboards/AtualizarProduto"
import './style.css';

const Dashboard = () => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div style={{display: "flex", width: "100%"}}>
    <MenuLateral setActivePage={setActivePage} />
    {activePage === 0 ? (
      <ListarProduto setActivePage={setActivePage} />
    ) : null}
    {activePage === 1 ? (
      <VerProduto setActivePage={setActivePage} />
    ) : null}
    {activePage === 2 ? (
      <AdicionarProduto setActivePage={setActivePage} />
    ) : null}
    {activePage === 3 ? (
      <AtualizarProduto setActivePage={setActivePage} />
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
