import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import CheckoutPage from "./pages/Checkout/CheckoutPage.jsx";
import OrdersPage from "./pages/Orders/OrdersPage.jsx";
import TrackingPage from "./pages/Tracking/TrackingPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  window.axios = axios; // type axios.post('/api/reset') in the console
  // It will resets the data to some default values

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} loadCart={loadCart} />}
        />
        <Route
          path="checkout"
          element={<CheckoutPage cart={cart} loadCart={loadCart} />}
        />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />

        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
