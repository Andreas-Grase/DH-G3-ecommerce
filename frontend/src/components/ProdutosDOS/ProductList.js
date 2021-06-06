import axios from "axios";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import "./style.css";

const ProductList = () => {
  const [data, setData] = useState({ produtos: [] });
  useEffect(() => {
    // fetch("/produtos")
    //   .then((res) => res.json())
    //   .then((res) => setData(res));

    // axios.get("/produtos").then((res) => setData(res.data));
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
    <div className="">
      <Product produtos={data.produtos} />
    </div>
  );
};

export default ProductList;
