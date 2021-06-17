import React from "react";
import Add from "../../../components/dashboards/usuarios/Add";
import MenuLateral from "../../../components/Navbar/MenuLateralDashboard";
import Admin from "../../templates/Admin";

const AdicionarUsuario = () => {

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <MenuLateral />
        <Add />
    </div>
  );
};

const template = () => (
  <Admin>
    <AdicionarUsuario />
  </Admin>
);
export default template;