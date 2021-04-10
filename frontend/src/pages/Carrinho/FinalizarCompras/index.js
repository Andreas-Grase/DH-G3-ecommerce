import React, { useState } from "react";
import DetalhesDaCompra from "../../../components/FinalizarCompras/DetalhesDaCompra";
import OpcoesDePagamento from "../../../components/FinalizarCompras/OpcoesDePagamento";
import ReviseSuaCompra from "../../../components/FinalizarCompras/ReviseSuaCompra";
import Main from "../../templates/Main";
import "./style.css";

const FinalizarCompras = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      {activePage === 0 ? (
        <DetalhesDaCompra setActivePage={setActivePage} />
      ) : null}
      {activePage === 1 ? (
        <OpcoesDePagamento setActivePage={setActivePage} />
      ) : null}
      {activePage === 2 ? (
        <ReviseSuaCompra setActivePage={setActivePage} />
      ) : null}
    </>
  );
};

const template = () => (
  <Main>
    <FinalizarCompras />
  </Main>
);
export default template;
