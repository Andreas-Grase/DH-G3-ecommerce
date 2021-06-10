import axios from "axios";
import React, { useEffect, useState } from "react";
import ListarProduto from "../../../components/dashboards/produtos/ListarProduto";
import MenuLateral from "../../../components/Navbar/MenuLateralDashboard";
import Admin from "../../templates/Admin";

const Listar = () => { 
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <MenuLateral />
      <ListarProduto />
    </div>
  );
};

const template = () => (
  <Admin>
    <Listar />
  </Admin>
);
export default template;
