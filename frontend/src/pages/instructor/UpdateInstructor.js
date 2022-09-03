import instance from "../../utils/axios";
import { Form, useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoach, resetAddCoach } from "../../store/coach/actions";
import Modal from "../../components/modal";
import Dialog from "../../components/dialog";
import { PulseLoader } from "react-spinners";
import { createFormData } from "../../utils/formdata";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const scalesq = [
  {
    name: "first_level",
    title: "First Level",
  },
  {
    name: "second_level",
    title: "Second Level",
  },
  {
    name: "caf_d_instructor",
    title: "CAF D instructor",
  },
  {
    name: "caf_c_instructor",
    title: "CAF C instructor",
  },
  {
    name: "caf_b_instructor",
    title: "CAF B instructor",
  },
  {
    name: "caf_a_instarctor",
    title: "CAF A instructor",
  },
  {
    name: "caf_pro_instructor",
    title: "CAF Pro instructor",
  },
];

const Updateinstructor = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const [imagep, setImagep] = useState(null);
  const [data, setData] = useState([]);

  const onImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };

  const initialValues = {
    // first_name]= useState(""),
    // middle_name]= useState(""),
    // photo:[],
    // last_name]= useState(""),
    // email]= useState(""),
    // dob: new Date().toISOString().split("T")[0],
    // gender: "male",
    // place_of_birth]= useState(""),
    // nationality]= useState(""),
    // education]= useState(""),
    // experience]= useState(""),
    // passport_number]= useState(""),
    // coach_phone_one]= useState(""),
    // coach_phone_two]= useState(""),
    // educational_document:[]
  };

  const validate = (values) => {
    const errors = {};

    if (!imageFile) {
      errors.image = "image is required";
    }
    if (!values.first_name) {
      errors.first_name = "first name required";
    }

    if (!values.middle_name) {
      errors.middle_name = "middle name required";
    }

    if (!values.last_name) {
      errors.last_name = "last name required";
    }

    if (!values.email) {
      errors.email = "email required";
    }

    if (!values.place_of_birth) {
      errors.place_of_birth = "place of birth required";
    }

    if (!values.nationality) {
      errors.nationality = "nationality required";
    }

    if (!values.education) {
      errors.education = "education required";
    }

    if (!values.experience) {
      errors.experience = "experience required";
    }

    if (!values.passport_number) {
      errors.passport_number = "passport number required";
    }

    return errors;
  };
  useEffect(() => {
    (async function () {
      const data = await instance.get(
        `http://localhost:8000/instructor/${params.id}`
      );
      console.log("wwwwwwwwwwwwwwwwwwwww", data.data?.data);
      setData(data.data?.data);
    })();
  }, []);
  const onEducationChange = (index) => (e) => {
    const _educations = [...educations];

    if (e.target.name === "educational_document") {
      _educations[index][e.target.name] = e.target.files[0];
    } else {
      _educations[index][e.target.name] = e.target.value;
    }
    seteducations(_educations);
  };

  const onSubmitHandler = (values) => {
   
  };

  const onCancelHandler = (e) => {
navigate('/admin/instrctors')
  };

  

  const [educations, seteducations] = useState('');

    const [first_name,setfirst_name]= useState("")
    const [last_name,setlast_name]= useState("")
    const [middle_name,setmiddle_name]= useState("")
    const [thumbImage,setthumbImage]=useState([])
    const [email,setemail]= useState("")
    const [dob,setdob]=useState('')
    const [gender,setgender]= useState("")
    const [place_of_birth,setplace_of_birth]= useState("")
    const [nationality,setnationality]= useState("")
    const [passport_number,setpassport_number]= useState("")
    const [education, seteducation] = useState('');
    const [experience,setexperience]= useState("")
    const [instructor_phone_one,setinstructor_phone_one]= useState("")
    const [instructor_phone_two,setinstructor_phone_two]= useState("")
    const [certification_id,setcertification_id]= useState("")
    const [educational_state,seteducational_state]= useState("")
    const [date_of_certificate_concede,setdate_of_certificate_concede]= useState("")
    const [place_of_certificate_concede,setplace_of_certificate_concede]= useState("")
    const [fileSingle,setfileSingle]=useState([])

  // const onChangeHandler = (e) => {
   
  //   // setValue({ ...value, [e.target.name]: e.target.value });
  //   // console.log(e.target.files[0]);
  //   // setImagep(e.target.files[0]);
  // };
  const handleValidation = (e) => {
  
  
  };
  const file=(e)=>{

  }
  const fileuploadhandler=()=>{

  }
  const onFinish = (values,e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
    console.log(values);
    console.log(values);
    alert('updated succesfully')
  };
  return (
    <form onSubmit={onFinish}>

      <div className="p-7 space-y-4">
        <div className="uppercase tracking-widest my-2 font-semibold text-sm">
          Update instructor
        </div>
        <div className="p-7 bg-white">
          <div className="capitalize my-2 font-semibold text-lg">
            basic information
          </div>
          <div className="space-y-3">
            <div className="my-1 text-red-500 text-sm">
            <label>photo</label>
            
            <input
                ref={imageRef}
                className="hidden"
                
                type="file"
                // onChange={onImageChange}
                onChange={(e) => {setthumbImage(e.target.files[0]);
                  setImage( URL.createObjectURL(e.target.files[0]));
                }}
                // value={value.thumbImage} 
              />
            </div> 
           <div className="flex flex-row"><div
                className={`h-36 w-36 bg-gray-100 ${
                  !image && "border-2"
                } border-dashed border-gray-500 flex justify-center items-center relative mt-1`}
              >
            <span
                  onClick={(e) => {
                    imageRef.current.click();
                  }}
                  className="hover:cursor-pointer absolute -top-3 -right-3 p-2 bg-white rounded-full drop-shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </span>
            {!image && (
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {image && (
                  <img src={image} alt="profileimagehere" className="h-full w-full object-cover" />
                )}
               
              </div>       <img className="pl-24 pt-2 h-36 " src={`/instructor_files/${data?.photo}`} alt="profile_image_here"/></div> 
         
            <div className="flex flex-col">
              <label>first name</label>

              <input
                className="p-2 border rounded-md"
                type="text"
                name="first_name"
                placeholder={data.first_name}
                onChange={(e) => {
                  setfirst_name(e.target.value);
              
                }}
              />
      
            </div>
            <div className="flex flex-col">
              <label>middle name</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.middle_name}

                type="text"
                name="middle_name"
                onChange={(e) => setmiddle_name(e.target.value)}
              />
     
            </div>
            <div className="flex flex-col">
              <label>last name</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.last_name}
                type="text"
                name="last_name"
                onChange={(e) => setlast_name(e.target.value)}
              />
           
            </div>
            <div className="flex flex-col">
              <label>gender</label>
              <select
                className="form-control"
                onChange={(e) => setgender(e.target.value)}
                name="gender"
                // value={data.gender} 
                id="gender"
              >
                {/* <option hidden>Select your gender</option> */}
                <option value={data.gender} disabled hidden selected>{data.gender}</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>email</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.email}
                type="email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />
          
            </div>
            <div className="flex flex-col">
              <label>Nationality</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.nationality}
                type="text"
                name="nationality"
                onChange={(e) => setnationality(e.target.value)}
              />
            
            </div>
            <div className="flex flex-col">
              <label>Place of Birth</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.nationality}
                type="text"
                name="place_of_birth"
                onChange={(e) => setplace_of_birth(e.target.value)}
              />
        
            </div>
            <div className="flex flex-col">
              <label>Passport Number</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.passport_number}
                type="text"
                name="passport_number"
                onChange={(e) => setpassport_number(e.target.value)}
              />
           
            </div>
            <div className="flex flex-col">
              <label>Date of Birth</label>
              <input
                className="p-2 border rounded-md"
                type="date"
                // value={data.dob}
                name="dob"
                onChange={(e) => setdob(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Education</label>
              <select
                className="p-2 border rounded-md bg-white"
             
             
                
                onChange={(e) => seteducation(e.target.value)}
                name="education"
                id="education"
              >
                  <option value={data.education} disabled hidden selected>{data.education}</option>
                <option value="secondary school">secondary school</option>
                <option value="diploma">diploma</option>
                <option value="degree">degree</option>
                <option value="masters">masters</option>
                <option value="phd">phd</option>
              </select>
          
            </div>

            <div className="flex flex-col">
              <label>Experience</label>
              <textarea
                className="p-2 border rounded-md max-h-36 min-h-fit"
                type="date"
                placeholder={data.experience}
                name="experience"
                onChange={(e) => setexperience(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>instructor Phonenumber - one </label>
              <input
                className="p-2 border rounded-md"
                type="number"
                placeholder={data.instructor_phone_one}
                name="instractor_phone_one"
                onChange={(e) => setinstructor_phone_one(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>instructor Phonenumber - two </label>
              <input
                className="p-2 border rounded-md"
                type="number"
                placeholder={data.instructor_phone_two}
                name="instractor_phone_two"
                onChange={(e) => setinstructor_phone_two(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="p-7 bg-white">
          <div className="capitalize my-2 font-semibold text-lg">
            Education information
          </div>
          <div className="space-y-3">
            <div className="flex flex-col space-y-1">
              <label>Educational State</label>
              <select
                className="p-2 border bg-white rounded-md "
                placeholder={data.educational_state}
                name="educational_state"
                onChange={(e) => seteducational_state(e.target.value)}
                id="educational_state"
              >
                <option value="First Level">First Level</option>
                <option value="Second Level">Second Level</option>
                <option value="CAF D instructor">CAF D instructor</option>
                <option value="CAF C instructor">CAF C instructor</option>
                <option value="CAF B instructor">CAF B instructor</option>
                <option value="CAF A instructor">CAF A instructor</option>
                <option value="CAF Pro instructor">CAF Pro instructor</option>

            
              </select>
            </div>
            <div>
              {/* {educations.map((education, index) => { */}
                {/* return ( */}
                  <div  className="flex flex-col space-y-1 my-5">
                    <div className="font-semibold text-md" onChange={(e) => seteducational_state(e.target.value)}>
                      {data.educational_state}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Certification Id </label>
                      <input
                        className="p-2 border rounded-md"
                        type="text"
                placeholder={data.certification_id}

                        name="certification_id"
                        onChange={(e) => setcertification_id(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Date of certificate concede </label>
                      <input
                        className="p-2 border rounded-md"
                        type="date"
                // value={data.date_of_certificate_concede}

                        name="date_of_certificate_concede"
                        onChange={(e) => setdate_of_certificate_concede(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col sapce-y-1">
                      <label>Place of certificate concede </label>
                      <input
                        className="p-2 border rounded-md"
                        type="text"
                placeholder={data.place_of_certificate_concede}
                name="place_of_certificate_concede"
                        onChange={(e) => setplace_of_certificate_concede(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Attach Document </label>
                      <input
                        className="p-2 border rounded-md"
                        type="file"
                placeholder={data.educational_document}
                name="educational_document"
                        onChange={e=>setfileSingle(e.target.files[0])}
                      />
                    </div>
                    <button
                          onClick={() => {
                            window.open(
                              `/instructor_files/${data.educational_document}`,
                              "_blank"
                            );
                          }}
                          className="flex space-x-2 bg-blue-500 rounded-lg px-2 py-1 text-white"
                        >Previous Document : 
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
                {/* ); */}
              
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center space-x-2">
          <button
            className="border px-2 py-1 rounded-md"
            type="button"
            onClick={onCancelHandler}
          >
            cancel
          </button>
          <button
            className="border px-2 py-1 rounded-md bg-blue-900 text-blue-50"
            onClick={(e) => {
              e.preventDefault();
              // console.log(e.target.name)
              const fd = new FormData();
              fd.append('thumbImage',thumbImage)
              fd.append('first_name',first_name)
              fd.append('last_name',last_name)
              fd.append('middle_name',middle_name)
              fd.append('email',email)
              fd.append('dob',dob)
              fd.append('gender',gender)
              fd.append('place_of_birth',place_of_birth)
              fd.append('nationality',nationality)
              fd.append('passport_number',passport_number)
              fd.append('education',education)
              fd.append('experience',experience)
              fd.append('instractor_phone_one',instructor_phone_one)
              fd.append('instractor_phone_two',instructor_phone_two)
              fd.append('certification_id',certification_id)
              fd.append('educational_state',educational_state)
              fd.append('date_of_certificate_concede',date_of_certificate_concede)
              fd.append('place_of_certificate_concede',place_of_certificate_concede)
              fd.append('fileSingle',fileSingle)
          
              
              // console.log(value);
          
              instance.patch(`/editinstractor/${data._id}`, fd).then(
                res=>{
                  console.log(res,"ddadwdawdawdad",fd)
                }
              );
              // console.log(fd);
                navigate("/admin/instructors");
            }}
            type="submit"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Updateinstructor;
