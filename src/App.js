import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayouts from './Components/Layouts/MainLayouts'
import ShoppingCart from './Components/ShoppingCart'
import Shops from './Components/Shops'
import Shop from './Components/Shop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route path="shops" element={<Shops />} />
            <Route path="shops/:slug" element={<Shop />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
