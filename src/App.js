import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayouts from './Components/Layouts/MainLayouts'
import Shop from './Components/Shop'
import ShoppingCart from './Components/ShoppingCart'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index={true} element={<Shop />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
