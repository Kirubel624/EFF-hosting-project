import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Dialog from "../../components/dialog";
import Modal from "../../components/modal";
import { fetchSingleCoach, resetCoach } from "../../store/coach/actions";
import { baseURL } from "../../utils/axios";
import profimg from '../../coachfiles/3-Untitled.png'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const InstractorDetail = () => {
  let navigate=useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [data,setData]=useState();

  // const { loading, data, error } = useSelector((state) => state.fetchCoach);

  useEffect(() => {
    (async function () {
      const data = await axios.get(
        `http://localhost:8000/instructor/${params.id}`
      );
      console.log("wwwwwwwwwwwwwwwwwwwww", data.data?.data);
      console.log(data?.data?.data?.photo);
      setData(data.data?.data);
    })();
  }, []);
  const DeleteHandlerCoach=async(_id)=>{
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => submit(_id)
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });

    
  }
  const submit =async (_id) => {
    const data = await axios.delete(
      `http://localhost:8000/deleteinstractor/${_id}`
    );
// alert(_id)
console.log(data)
    navigate('/admin/instructors');
    // alert("data deleted succesfully");
  }
  return (
    <div className="p-7">
      {/* <Modal open={error}>
        <Dialog
          severity="failure"
          message="fetching coach failed !"
          close={() => dispatch(resetCoach())}
        />
      </Modal> */}
      <Modal open={loading}>
        <div className="bg-black bg-opacity-40 h-screen w-screen absolute flex items-center justify-center z-40 shadow-lg">
          <PulseLoader color="white" />
        </div>
      </Modal>
      {data && (
        <div className="mt-3 space-y-6 drop-shadow-lg rounded-lg">
          <div className="font-bold text-lg mb-2 bg-blue-500 text-white p-1 rounded-md ">
            General Infomation
          </div>
          <div className="bg-white drop-shadow-lg rounded-lg">
            <div className="flex p-7">
              <img
                className="h-36 w-36 object-cover mr-4"
                src= {`${baseURL}/${data.photo}`}
                alt= "profileimage"
              />
              <div className="grid grid-cols-2 gap-x-2 capitalize ">
                <div className="flex space-x-4 ">
                  <label className="font-semibold capitalize">
                    First Name :
                  </label>
                  <span>{data.first_name}</span>
                </div>
                <div className="flex space-x-2">
                  <label className="font-semibold capitalize">
                    Middle Name :
                  </label>
                  <span>{data.middle_name}</span>
                </div>
                <div className="flex space-x-2">
                  <label className="font-semibold capitalize">
                    Last Name :
                  </label>
                  <span>{data.last_name}</span>
                </div>
                <div className="flex space-x-2">
                  <label className="font-semibold capitalize">
                    Date Of Birth :
                  </label>
                  <span>{data.dob?.split("T")[0]}</span>
                </div>
                <div className="flex space-x-2 ">
                  <label className="font-semibold capitalize">
                    Place Of Birth :
                  </label>
                  <span>{data.place_of_birth}</span>
                </div>
                <div className="flex space-x-2">
                  <label className="font-semibold capitalize">Gender : </label>
                  <span>{data.gender}</span>
                </div>
                <div className="flex space-x-2">
                  <label className="font-semibold capitalize">
                    Nationality :
                  </label>
                  <span>{data.nationality}</span>
                </div>
                <div className="flex space-x-2">
                  <label className="font-semibold capitalize">
                    Passport Number :
                  </label>
                  <span>{data.passport_number}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold text-lg mb-4 mt-12 bg-blue-500 text-white p-1 rounded-md ">
            Educational Infomation
          </div>

          <div className="bg-white drop-shadow-lg rounded-lg">
            <div className="p-7   ">
              <div className="flex space-x-2">
                <label className="font-semibold capitalize">
                  Education Level :
                </label>
                <span>{data.education}</span>
              </div>
              <div className="grid grid-cols-2 mt-2">
        
           
                    <div
                     
                      className="space-y-1 shadow-lg p-2 rounded-lg"
                    >
                      <div className="flex space-x-2">
                        <label className="font-semibold capitalize">
                          Certificate Id :
                        </label>
                        <span>{data.certification_id}</span>
                      </div>
                      <div className="flex space-x-2">
                        <label className="font-semibold capitalize">
                          Education Level :
                        </label>
                        <span>{data.educational_state}</span>
                      </div>
                      <div className="flex space-x-2">
                        <label className="font-semibold capitalize">
                          Place Of Certificate Concede :
                        </label>
                        <span>{data.place_of_certificate_concede}</span>
                      </div>
                      <div className="flex space-x-2">
                        <label className="font-semibold capitalize">
                          Date Of Certificate Concede :
                        </label>
                        <span>{data.date_of_certificate_concede}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            window.open(
                              `${baseURL}/${data.educational_document}`,
                              "_blank"
                            );
                          }}
                          className="flex space-x-2 bg-blue-500 rounded-lg px-2 py-1 text-white"
                        >
                          <span className="font-semibold capitalize">
                            Open Document
                          </span>

                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
               
             
              </div>
            </div>
          </div>

          <div className="font-bold text-lg mb-3 bg-blue-500 text-white p-1 rounded-md">
            Contact Infomation
          </div>

          <div className="bg-white  drop-shadow-lg rounded-lg">
            <div className="px-4 py-1">
              <div className="flex space-x-2 pt-5 pb-2">
                <label className="font-semibold capitalize ">Email :</label>
                <span>{data.email}</span>
              </div>
              <div className="flex space-x-2 pb-2">
                <label className="font-semibold capitalize">
                  Phone Number One :
                </label>
                <span>{data.instractor_phone_one}</span>
              </div>
              <div className="flex space-x-2 pb-5">
                <label className="font-semibold capitalize">
                  Phone Number Two :
                </label>
                <span>{data.instractor_phone_two}</span>
              </div>
            </div>
          </div>
          <div>
            <Link
              to={`/admin/instructors/${params.id}/update`}
              className=" rounded mx-3 border-sky-900 border-[1px] py-[4px] px-10"
            >
              Edit
            </Link>
            <button className="rounded mx-3 border-red-700 border-[1px] py-[4px] px-10"
            onClick={()=>DeleteHandlerCoach(data._id)}
            >
              Delete 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstractorDetail;
