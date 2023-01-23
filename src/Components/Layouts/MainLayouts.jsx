import { Outlet } from 'react-router-dom'
import Menu from '../Menu'

const MainLayouts = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayouts
