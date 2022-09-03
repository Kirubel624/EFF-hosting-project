import React, { useContext } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Nav from "../../components/nav";
import { Context } from "../../context/Context";
import Login from "../auth/login";
import AddEditCoach from "../coach/add_edit_coach";
import Coaches from "../coach/coaches";
import CoachesDetail from "../coach/coaches_detail";
import UpdateCoach from "../coach/UpdateCoach";
import AddEditInstructor from "../instructor/add_edit_instructor";
// import DeleteInstructor from "../instructor/DeleteInstructor";
import InstractorDetail from "../instructor/instractor_detail";
import Instractors from "../instructor/instuctors";
import UpdateInstructor from "../instructor/UpdateInstructor";

const AdminHome = () => {
  
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const handleLogout=()=>{
    dispatch({ type: "LOGOUT" });
  };
  return (
    
    <div className="grid grid-cols-5 min-h-screen h-screen overflow-hidden">
      <div className="bg-blue-700 ">
   
        <Nav />
        
      </div>
         
      <div className="overflow-y-scroll  col-span-4 bg-gray-100">
        <div className="h-14 bg-white flex justify-end items-center ">
        <p className="px-4 pt-3">{user?.userdata[0].username}</p> 
          <div className="group bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center mr-8 relative">
   
 
            <span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
      
            <div className="absolute hidden group-hover:block bg-white rounded-md top-12 p-2 drop-shadow-lg">
              <button className="flex space-x-2 p-2" onClick={handleLogout}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span>logout</span>
              </button>
            </div>
          </div>
        </div>

        <Routes>
        {user?.token &&
        <Route path="coaches" element={<Coaches />} />}

          <Route path="coaches/new" element={user?.token ?<AddEditCoach />:<Navigate to={"/login"} />} />
          <Route path="coaches/:id/update" element={user?.token ?<UpdateCoach />:<Navigate to={"/login"} />} />

          <Route path="coaches/:id/detail" element={user?.token ?<CoachesDetail />:<Navigate to={"/login"} />} />
          <Route path="instructors/new" element={user?.token ?<AddEditInstructor />:<Navigate to={"/login"} />} />
          <Route path="instructors" element={user?.token ?<Instractors />:<Navigate to={"/login"} />} />
          <Route path="instructors/:id/detail" element={user?.token ?<InstractorDetail />:<Navigate to={"/login"} />} />
          <Route path="instructors/:id/update" element={user?.token ?<UpdateInstructor />:<Navigate to={"/login"} />} />         
        </Routes>
      </div>
    </div>
  );
};

export default AdminHome;
