import Footer from "../../../components/Footer";
import NavbarLogin from "../../../components/Navbar/NavbarLogin";

function Secundary(props) {
  const { children } = props;
  return (
    <>
      <NavbarLogin />
      {children}
      <Footer />
    </>
  );
}
export default Secundary;
