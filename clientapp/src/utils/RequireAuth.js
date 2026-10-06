import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles, element }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  const location = useLocation();

  return allowedRoles.includes(role) ? (
    element
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
