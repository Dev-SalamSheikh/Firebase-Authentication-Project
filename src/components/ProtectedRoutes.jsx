import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/useAuthContext";

const ProtectedRoutes = ({ children }) => {
  let { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoutes;
