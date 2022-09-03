import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Redirect 
} from "react-router-dom";
import Login from "./pages/auth/login";
import AdminHome from "./pages/admin_home/admin_home";
import ProtectedRoute from "./components/protected_route";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Context } from "./context/Context";





const App = () => {
  const { loading, data, error } = useSelector((state) => state.loginReducer);
  const { user, dispatch } = useContext(Context);
  console.log(user?.userdata[0].username)
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/"
          element={
            <div>comming soon</div>
          }
        /> */}
       <Route
          path="/admin/*"
          element={ user?.token ?<AdminHome/>:<Navigate to='/login'/>}
         
          
        />
      </Routes>
    </Router>
  );
};

export default App;
