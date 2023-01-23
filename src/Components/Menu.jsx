import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Shop
      </NavLink>
      <NavLink to="shoppingcart">ShoppingCart</NavLink>
    </nav>
  )
}

export default Menu
