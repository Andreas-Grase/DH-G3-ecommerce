import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import MenuLateral from "../../../components/Navbar/MenuLateralDashboard";

function Admin(props) {
  const { children } = props;
  return (
    <>
      <NavbarDashboard />
      {children}
      <MenuLateral />
    </>
  );
}
export default Admin;
