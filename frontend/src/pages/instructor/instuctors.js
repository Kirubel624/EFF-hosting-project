import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Dialog from "../../components/dialog";
import Modal from "../../components/modal";
import {
  fetchInstractors,
  resetInstractors,
} from "../../store/instractor/actions";
import { baseURL } from "../../utils/axios";
import axios from "axios";
import profimg from '../../coachfiles/3-Untitled.png'

const Instractors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [education, setEducation] = useState("");
  const [instructors, setInstructors] = useState([]);

  // const {
  //   loading: coachesLoading,
  //   data: coaches,
  //   error: coachesError,
  // } = useSelector((state) => state.fetchCoaches);
  useEffect(() => {
    (async function () {
      const data = await axios.get("http://localhost:8000/instructors");
      console.log("ppppppppppppppppppp", data.data.paylaod);
      setInstructors(data.data.paylaod);
    })();
  }, []);
  return (
    <div>
      {/* <Modal open={error}>
        <Dialog
          severity="failure"
          message="fetching instructors failed !"
          close={() => dispatch(resetInstractors())}
        />
      </Modal>
      <Modal open={loading}>
        <div className="bg-black bg-opacity-40 h-screen w-screen absolute flex items-center justify-center z-40">
          <PulseLoader color="blue" />
        </div> */}
      {/* </Modal> */}
      <div className="p-7 space-y-4">
        <div className="flex justify-end">
          <button
            className="px-2 py-1  bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md space-x-2 flex items-center"
            onClick={() => navigate("/admin/instructors/new")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span> Add instructor</span>
          </button>
        </div>

        <div className="bg-white p-7 shadow-lg rounded-lg">
          <div className="my-2">
            <div className="pl-2">
              <span>Educational Status</span>
            </div>
            <div className="px-2 py-1 border rounded-md shadow-sm flex space-x-2 w-fit mb-8">
              <select
                className="border-0 outline-none bg-white"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                <option value="">all</option>
                <option value="secondary school">secondary school</option>
                <option value="diploma">diploma</option>
                <option value="degree">degree</option>
                <option value="masters">masters</option>
                <option value="phd">phd</option>
              </select>
            </div>
          </div>
          <table className="w-full p-2 shadow-md rounded-lg">
            <thead>
              <tr>
                <td className="border-b"></td>
                <td className="font-semibold capitalize py-1 border-b pb-4">
                  first name
                </td>
                <td className="font-semibold capitalize py-1 border-b pb-4">
                  middle name
                </td>
                <td className="font-semibold capitalize py-1 border-b pb-4">
                  last name
                </td>
                <td className="font-semibold capitalize py-1 border-b pb-4">
                  gender
                </td>
              </tr>
            </thead>
            <tbody className="text-sm">
              {instructors?.map((instructor) => {
                return (
                  <tr
                    className="border hover:bg-slate-50 hover:cursor-pointer"
                    onClick={() =>
                      navigate(`/admin/instructors/${instructor._id}/detail`)
                    }
                  >
                    <td className="p border-b py-2">
                      <div className="flex items-center justify-center">
                        <img
                          className="h-14 w-14 rounded-full object-cover"
                          src={`/instructor_files/${instructor.photo}`}
                          alt= "profileimage"
                        />
                      </div>
                    </td>
                    <td className=" border-b ">{instructor.first_name}</td>
                    <td className=" border-b ">{instructor.middle_name}</td>
                    <td className=" border-b ">{instructor.last_name}</td>
                    <td className=" border-b ">{instructor.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instractors;
