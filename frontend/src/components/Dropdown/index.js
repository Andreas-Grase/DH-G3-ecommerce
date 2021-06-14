import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

const Dropdown = () => {
  const [data, setData] = useState({ produtos: [] });
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("/produtos/search", {
        searchParam: "id_categoria",
        searchValue: search,
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="card">
      <div class="card-header"><b>CATEGORIA</b></div>
      <nav class="list-group list-group-flush">
        <a className="list-group-item"  onClick={handleSearch}>
          Cabelo
        </a>
        <a className="list-group-item" onClick={handleSearch}>
          Barbearia
        </a>
        <a className="list-group-item" onClick={handleSearch}>
          Pele
        </a>
        <a className="list-group-item" onClick={handleSearch}>
          Unhas
        </a>
      </nav>
    </div>
  );
};

export default Dropdown;
