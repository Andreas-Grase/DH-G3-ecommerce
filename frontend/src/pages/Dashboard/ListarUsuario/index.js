import React from "react";
import List from "../../../components/dashboards/usuarios/List";
import MenuLateral from "../../../components/Navbar/MenuLateralDashboard";
import Admin from "../../templates/Admin";

const ListarUsuario = () => {

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <MenuLateral />
        <List />
    </div>
  );
};

const template = () => (
  <Admin>
    <ListarUsuario />
  </Admin>
);
export default template;
