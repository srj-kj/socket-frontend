import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function UserAuth() {
  const user = useSelector((state) => state?.app);
  return user.isLogged ? <Outlet /> : <Navigate to="/login" />
  
}

export default UserAuth;
