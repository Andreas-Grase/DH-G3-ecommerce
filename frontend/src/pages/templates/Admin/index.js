import React, { useState } from "react";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import MenuLateral from "../../../components/Navbar/MenuLateralDashboard";

function Admin(props) {
  const { children } = props;
  const [activePage, setActivePage] = useState(0);
  return (
    <>
      <NavbarDashboard />
      {children}
    </>
  );
}
export default Admin;
