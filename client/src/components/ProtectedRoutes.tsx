import { Navigate, Outlet } from 'react-router-dom'
interface Props {
  isAllow: boolean
  children: React.ReactNode
}

function ProtectedRoutes({children, isAllow}: Props) {

  // si no se esta logueado se devuelve al login page
  if(!isAllow) return <Navigate to="/login" />

  return children ? <>{children}</> : <Outlet />
}

export default ProtectedRoutes;