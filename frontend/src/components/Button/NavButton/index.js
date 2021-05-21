import React from "react";
import "./style.css";

const NavButton = (props) => {
  const { titulo, executeFunction } = props;
  return (
    <nav id="btn-back">
      <button id="back" onClick={() => executeFunction()}>
        {titulo}
      </button>
    </nav>
  );
};

export default NavButton;
