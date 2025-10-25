import "./OrdersPage.css";
import Header from "../../Components/Header.jsx";
import axios from "axios";
import React, { useState, useEffect } from "react";
import OrdersGrid from "./OrdersGrid.jsx";

function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersPageData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrdersPageData();
  }, []);

  return (
    <>
      <title>Orders</title>

      <link rel="icon" href="/public/images/icons/orders.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}

export default OrdersPage;
