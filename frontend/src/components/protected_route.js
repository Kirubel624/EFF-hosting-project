import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const ProtectedRoute = () => {
  let navigate=useNavigate();
  const { loading, data, error } = useSelector((state) => state.loginReducer);
  if (!data || data?.role !== "admin") {
    return navigate("/login");
  }


};

export default ProtectedRoute;
