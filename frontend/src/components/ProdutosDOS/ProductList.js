import React, { useState, useEffect } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "./context";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState({ produtos: [] });
  useEffect(() => {
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
    <React.Fragment>
      <div>
        <div className="container">
          <Title name="Nossos" title="Acessórios"></Title>

          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
