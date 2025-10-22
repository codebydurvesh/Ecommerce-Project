import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import CheckoutPage from './pages/Checkout/CheckoutPage.jsx'
import OrdersPage from './pages/Orders/OrdersPage.jsx'
import TrackingPage from './pages/Tracking/TrackingPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import './App.css'
import { useState , useEffect } from 'react'
import axios from 'axios'


function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cart={cart} />} />
        <Route path='checkout' element={<CheckoutPage cart={cart} />} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='tracking' element={<TrackingPage />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
