import React, { useState } from "react";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";

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
