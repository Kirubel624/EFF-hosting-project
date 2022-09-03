import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
const Nav = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-center p-5">
        <img src={logo} className="h-32 w-32 mt-10  " />
      </div>
      <div className="flex flex-col space-y-1 mt-14 text-white">
        <button
          onClick={() => {
            setSelected(0);
            navigate("/admin/coaches");
          }}
        >
          <div
            className={`border-r-4 border-r-blue-500 p-2 flex space-x-2 items-center  ${
              selected === 0 && "border-r-blue-50  bg-blue-900 "
            } `}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </span>
            <span>coaches</span>
          </div>
        </button>
        <button
          onClick={() => {
            setSelected(1);
            navigate("/admin/instructors");
          }}
        >
          <div
            className={`border-r-4 border-r-blue-500 p-2 flex space-x-2 items-center  ${
              selected === 1 && "border-r-blue-50  bg-blue-900"
            } `}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </span>
            <span>instractors</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Nav;
