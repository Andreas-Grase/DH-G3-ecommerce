import logo from "../../assets/icons/logo-gris-claro.svg";
import Secundary from "../../pages/templates/Secundary"
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <Login />
  );
};
const template = () => (
  <Secundary>
    <LoginPage />
  </Secundary>
);
export default template;
