import axios from "axios";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import "./style.css";

const ProductList = ({produtos}) => {
  return (
    <div className="">
      <Product produtos={produtos} />
    </div>
  );
};

export default ProductList;
