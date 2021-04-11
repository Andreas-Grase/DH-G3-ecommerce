import { NavLink } from "react-router-dom";
import "./style.css";

const EndButton = () => {
  return (
    <nav id="btn-end">
    <NavLink to="/" id="end">
      Finalizar a compra
    </NavLink>
  </nav>
  );
};

export default EndButton;