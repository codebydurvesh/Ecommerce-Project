import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../Components/Header.jsx";
import ProductsGrid from "./ProductsGrid.jsx";

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <div>
      <title>Ecommerce Project</title>

      <link rel="icon" href="images/icons/home.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}

export default HomePage;
