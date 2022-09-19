import { Navigate, Outlet } from "react-router-dom"
import useIsLogin from "shared/hooks/useIsLogin"

const PrivateRoute = () => {
  const isLogin = useIsLogin();

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return <Outlet/>
}

export default PrivateRoute
