import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function LoginAuth() {
  const user = useSelector((state) => state?.app);
  return user.isLogged ? <Navigate to="/" /> : <Outlet />
  
}

export default LoginAuth;
