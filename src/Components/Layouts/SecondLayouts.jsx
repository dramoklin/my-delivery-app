import { Outlet } from 'react-router-dom'
import SecondMenu from '../SecondMenu'

const SecondLayouts = () => {
  return (
    <>
      <SecondMenu />
      <Outlet />
    </>
  )
}

export default SecondLayouts
