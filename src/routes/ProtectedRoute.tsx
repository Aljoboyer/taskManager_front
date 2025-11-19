import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const storedData = localStorage.getItem("tasks_user");

  let user = null;

  try {
    user = storedData ? JSON.parse(storedData) : null;
  } catch (err) {
    user = null;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

