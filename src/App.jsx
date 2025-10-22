import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
      </Routes>
    </>
  )
}

export default App
