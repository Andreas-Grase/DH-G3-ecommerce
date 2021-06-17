import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuLateral from "../../../components/Navbar/MenuLateralDashboard";
import AdicionarProduto from "../../../components/dashboards/produtos/AdicionarProduto";
import Admin from "../../templates/Admin";

const Criar = () => {
  const [data, setData] = useState({ produtos: [] });
  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios
    //   .get("/produtos")
    //   .then((res) => setData(res.data))
    //   .catch((error) => console.log(error));
    const getData = async () => {
      try {
        const response = await axios.get("/produtos");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <MenuLateral />
        <AdicionarProduto produtos={data.produtos} />
    </div>
  );
};

const template = () => (
  <Admin>
    <Criar />
  </Admin>
);
export default template;
