import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import NavbarHome from "../../../components/Navbar/NavbarHome";

function Main(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <NavbarHome />
      {children}
      <Footer />
    </>
  );
}
export default Main;
