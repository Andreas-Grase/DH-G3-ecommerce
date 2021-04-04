import DetalhesDaCompra from "../../../components/FinalizarCompras/DetalhesDaCompra";
import OpcoesDePagamento from "../../../components/FinalizarCompras/OpcoesDePagamento";
import ReviseSuaCompra from "../../../components/FinalizarCompras/ReviseSuaCompra";
import "./style.css"; 

const FinalizarCompras = () => {
  return (
    <>
    <DetalhesDaCompra/>
    <OpcoesDePagamento/>
    <ReviseSuaCompra/>
    </>
  );
};

export default FinalizarCompras;
