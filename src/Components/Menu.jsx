import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      {/* <NavLink to="." end>
        Home
      </NavLink> */}
      <NavLink to="shops" end>
        Shops
      </NavLink>
      <NavLink to="shoppingcart">ShoppingCart</NavLink>
    </nav>
  )
}

export default Menu
