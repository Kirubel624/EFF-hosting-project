import React, { useState } from "react";

const Dialog = ({ close = () => {}, severity = "success", message = "" }) => {
  if (!(severity === "success" || severity === "failure"))
    throw new Error("illegal serverity");
  return (
    <div
      style={{ zIndex: 2000 }}
      className={`absolute right-10 bottom-10 drop-shadow-lg rounded border-l-8 ${
        severity == "success" ? "border-l-green-400" : "border-l-red-400"
      } border-l-green-400 flex bg-white py-2 items-center`}
    >
      <span
        className={`${
          severity == "success" ? "text-green-400" : "text-red-400"
        } flex items-center mx-4`}
      >
        {severity == "success" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </span>
      <div className="flex flex-col">
        <p>{severity == "success" ? "Success" : "Failure"}</p>
        <p className="text-gray-500 capitalize text-sm">{message}</p>
      </div>
      <button
        className="text-gray-700 uppercase ml-6 mr-2"
        onClick={() => close()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Dialog;
