import { NavLink } from 'react-router-dom'
import ShopList from '../Components/Data/RestaurantList'
import styles from './Shops.module.css'
const Shops = () => {
  return (
    <div className={styles.shopsTable}>
      <h3>Shops:</h3>
      {ShopList.map((shop) => (
        <div className={styles.shopDis} key={shop.id}>
          <NavLink to={`${shop.slug}`} className={styles.shopLink}>
            {shop.title}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Shops
