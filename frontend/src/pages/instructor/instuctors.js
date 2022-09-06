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
import 'antd/dist/antd.css'
// import Checkbox from "antd/lib/checkbox/Checkbox";
import {Button, Checkbox } from "antd";


const Instractors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [education, setEducation] = useState("");
  const [instructors, setInstructors] = useState([]);

const [mediumInstructor, setMediumInstructor] = useState("");
const [higherInstructor,setHigherInstructor]=useState("")
const [CAFDInstructor, setCAFDInstructor] = useState("");
const [CAFCInstructor,setCAFCInstructor]=useState("")
const [CAFBInstructor,setCAFBInstructor]=useState("")
const [CAFAInstructor,setCAFAInstructor]=useState("")
const [CAFPROInstructor,setCAFPROInstructor]=useState("")
const[fIfaInstractor,setFIFAInstractor]=useState('')
  // const {
  //   loading: InstructoresLoading,
  //   data: Instructores,
  //   error: InstructoresError,
  // } = useSelector((state) => state.fetchInstructores);
  useEffect(() => {
    const feachData =async ()=> {
      const data = await axios.get("http://localhost:8000/instructors");
      let ff = [];
      let gg;
      if (mediumInstructor) {
        ff = [
          ...ff,
          ...data.data.paylaod.filter((education) => education.educational_state ==="Medium Instructor"
          
          ),
         
        ];
      }
        if (higherInstructor) {
          ff = [
            ...ff,
            ...data.data.paylaod.filter((education) => education.educational_state ==="Higher Instructor"
            ,console.log(education.education)
            ),
           
          ];


          
        }
          if (CAFDInstructor) {
            ff = [
              ...ff,
              ...data.data.paylaod.filter((education) => education.educational_state ==="CAF D Instructor"
              ,console.log(education.education)
              ),
             
            ];
          }
            if (CAFCInstructor) {
              ff = [
                ...ff,
                ...data.data.paylaod.filter((education) => education.educational_state ==="CAF C Instructor"
                ,console.log(education.education)
                ),
               
              ];
            }
              if (CAFBInstructor) {
                ff = [
                  ...ff,
                  ...data.data.paylaod.filter((education) => education.educational_state ==="CAF B Instructor"
                  ,console.log(education.education)
                  ),
                 
                ];
        // console.log(education.education);
      }

      if (CAFAInstructor) {
        ff = [
          ...ff,
          ...data.data.paylaod.filter((education) => education.educational_state ==="CAF A Instructor"
          ,console.log(education.education)
          ),
         
        ];
// console.log(education.education);
}
if (CAFPROInstructor) {
  ff = [
    ...ff,
    ...data.data.paylaod.filter((education) => education.educational_state ==="CAF Pro Instructor"
    ,console.log(education.education)
    ),
   
  ];
// console.log(education.education);
}
if(fIfaInstractor){
  ff = [
    ...ff,
    ...data.data.paylaod.filter((education) => education.educational_state === "FIFA Instructor"
    ,
    ),
  ];
}
// if (fIfaInstractor) {
//   ff = [
//     ...ff,
//     ...data.data.paylaod.filter((education) => education.educational_state ==="FIFA Instractor"
//     ,console.log(data.data.paylaod)
//     ),
   
//   ];
// // console.log(education.education);
// }
      if (ff.length === 0) {
        ff = [...data.data.paylaod];
      }
      // console.log("ppppppppppppppppppp", data.data.paylaod);
      setInstructors(ff);
      console.log("::::::::::::::::::::::::::::::::::::::::::::::", ff);

    };   
     feachData();
    
  }, [mediumInstructor,higherInstructor,CAFDInstructor,CAFCInstructor,CAFBInstructor,CAFAInstructor,CAFPROInstructor,fIfaInstractor]);
  const handleOnChange=()=>{
    let result;
    // education=== 
  }
  const handleMediumInstructor = () => {
    setMediumInstructor(!mediumInstructor);
  };
  const handlehigherInstructor =()=>{
    setHigherInstructor(!higherInstructor);
  }
  const handleCAFDInstructor =()=>{
    setCAFDInstructor(!CAFDInstructor);
  }
  const handleCAFCInstructor=()=>{
    setCAFCInstructor(!CAFCInstructor);
  }
  const handleCAFBInstructor =()=>{
    setCAFBInstructor(!CAFBInstructor);
  }
  const handleCAFAInstructor=()=>{
    setCAFAInstructor(!CAFAInstructor);

  }
  const handleCAFPROInstructor=()=>{
    setCAFPROInstructor(!CAFPROInstructor);
    
  }
  const handleFifaInstructor=()=>{
    setFIFAInstractor(!fIfaInstractor);
  }
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
            <div className="px-2 py-2 my-4 border rounded-md shadow-sm flex space-x-2 w-fit mb-8">
            <Checkbox onChange={(e) => handleMediumInstructor()}>Medium Instructor</Checkbox>
            <Checkbox name="freelance" onChange={(e) => handlehigherInstructor()}>
            Higher Instructor
          </Checkbox>
{/* <Button>not working</Button> */}
<Checkbox name="freelance" onChange={(e) => handleCAFDInstructor()}>
CAF D Instructor
          </Checkbox>
          <Checkbox onChange={(e) => handleCAFCInstructor()}>CAF C Instructor</Checkbox>
      
         
          <Checkbox onChange={(e) => handleCAFBInstructor()}>CAF B Instructor</Checkbox>
          <Checkbox onChange={(e) => handleCAFAInstructor()}>CAF A Instructor</Checkbox>
          <Checkbox onChange={(e) => handleCAFPROInstructor()}>CAF PRO Instructor</Checkbox>
          <Checkbox onChange={(e) => handleFifaInstructor()}>FIFA Instractor</Checkbox>
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
                          src={`${instructor.photo}`}
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
