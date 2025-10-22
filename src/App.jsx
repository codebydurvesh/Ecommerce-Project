import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<p>Test checkout page</p>} />
      </Routes>
    </>
  )
}

export default App
