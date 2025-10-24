import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../Components/Header.jsx";
import ProductsGrid from "./ProductsGrid.jsx";
import { useSearchParams } from "react-router-dom";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <div>
      <title>Ecommerce Project</title>

      <link rel="icon" href="/public/images/icons/home.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </div>
  );
}

export default HomePage;
