import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import CheckoutPage from './pages/Checkout/CheckoutPage.jsx'
import OrdersPage from './pages/Orders/OrdersPage.jsx'
import TrackingPage from './pages/Tracking/TrackingPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='tracking' element={<TrackingPage />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
