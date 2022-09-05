import instance from "../../utils/axios";
import { Form, useFormik } from "formik";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoach, resetAddCoach } from "../../store/coach/actions";
import Modal from "../../components/modal";
import Dialog from "../../components/dialog";
import { PulseLoader } from "react-spinners";
import { createFormData } from "../../utils/formdata";
import { Navigate, useNavigate } from "react-router-dom";

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
    name: "caf_d_Instructor",
    title: "CAF D Instructor",
  },
  {
    name: "caf_c_Instructor",
    title: "CAF C Instructor",
  },
  {
    name: "caf_b_Instructor",
    title: "CAF B Instructor",
  },
  {
    name: "caf_a_instarctor",
    title: "CAF A Instructor",
  },
  {
    name: "caf_pro_Instructor",
    title: "CAF Pro Instructor",
  },
];

const AddEditInstructor = () => {
  const dispatch = useDispatch();
  // const {
  //   loading: addCoachLoading,
  //   success: addCoachSuccess,
  //   error: addCoachError,
  // } = useSelector((state) => state.addCoach);

  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const [imagep, setImagep] = useState(null);
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
    // instractor_phone_one]= useState(""),
    // instractor_phone_two]= useState(""),
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
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    formData.append("photo", imageFile);
    educations.forEach((education) => {
      formData.append(
        education.educational_state_name,
        education.educational_document
      );
    });
    createFormData(formData, "educations", educations);
    dispatch(addCoach(formData));
    formik.setValues(initialValues);
    seteducations([]);
    setImage(null);
  };

  const onCancelHandler = (e) => {};

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: onSubmitHandler,
  });

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
    const [instractor_phone_one,setinstractor_phone_one]= useState("")
    const [instractor_phone_two,setinstractor_phone_two]= useState("")
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
  };
  return (
    <form onSubmit={onFinish}>
      {/* <Modal open={addCoachError}>
        <Dialog
          severity="failure"
          message="adding coach failed !"
          close={() => dispatch(resetAddCoach())}
        />
      </Modal>
      <Modal open={addCoachSuccess}>
        <Dialog
          severity="success"
          message="coach added successfully !"
          close={() => dispatch(resetAddCoach())}
        />
      </Modal>
      <Modal open={addCoachLoading}>
        <div className="bg-black bg-opacity-40  h-screen w-screen absolute flex items-center justify-center">
          <PulseLoader color="blue" />
        </div>
      </Modal> */}

      <div className="p-7 space-y-4">
        <div className="uppercase tracking-widest my-2 font-semibold text-sm">
          Add Instructor
        </div>
        <div className="p-7 bg-white">
          <div className="capitalize my-2 font-semibold text-lg">
            basic information
          </div>
          <div className="space-y-3">
            <div className="my-1 text-red-500 text-sm">
            <label>photo</label>
              {formik.errors.image && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.image}
                </div>
              )}
            <div
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
                  <img src={image} alt="imagehere" className="h-full w-full object-cover" />
                )}
              </div>

            <input
                ref={imageRef}
                className="hidden"
                type="file"
                // onChange={onImageChange}
      
                onChange={
                  (e) =>{
                    setthumbImage(e.target.files[0]);
                    setImage( URL.createObjectURL(e.target.files[0]));
                  } }
                // value={value.thumbImage} 
              />
            </div> 

            <div className="flex flex-col">
              <label>first name</label>

              <input
                className="p-2 border rounded-md"
                placeholder="e.g abebe"
                type="text"
                name="first_name"
                onChange={(e) => setfirst_name(e.target.value)}
              />
              {formik.errors.first_name && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.first_name}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>middle name</label>
              <input
                className="p-2 border rounded-md"
                placeholder="e.g solomon"
                type="text"
                name="middle_name"
                onChange={(e) => setmiddle_name(e.target.value)}
              />
              {formik.errors.middle_name && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.middle_name}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>last name</label>
              <input
                className="p-2 border rounded-md"
                placeholder="e.g alemu"
                type="text"
                name="last_name"
                onChange={(e) => setlast_name(e.target.value)}
              />
              {formik.errors.last_name && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.last_name}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>gender</label>
              <select
                className="form-control"
                onChange={(e) => setgender(e.target.value)}
                name="gender"
                id="gender"
              >
                <option hidden>Select your gender</option>

                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>email</label>
              <input
                className="p-2 border rounded-md"
                placeholder="e.g abebe@gmail.com"
                type="email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />
              {formik.errors.email && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>Nationality</label>
              <input
                className="p-2 border rounded-md"
                placeholder="e.g Ethiopian"
                type="text"
                name="nationality"
                onChange={(e) => setnationality(e.target.value)}
              />
              {formik.errors.nationality && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.nationality}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>Place of Birth</label>
              <input
                className="p-2 border rounded-md"
                placeholder="e.g Addis Ababa"
                type="text"
                name="place_of_birth"
                onChange={(e) => setplace_of_birth(e.target.value)}
              />
              {formik.errors.place_of_birth && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.place_of_birth}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>Passport Number</label>
              <input
                className="p-2 border rounded-md"
                placeholder=""
                type="text"
                name="passport_number"
                onChange={(e) => setpassport_number(e.target.value)}
              />
              {formik.errors.passport_number && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.passport_number}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>Date of Birth</label>
              <input
                className="p-2 border rounded-md"
                type="date"
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
                <option value="secondary school">secondary school</option>
                <option value="diploma">diploma</option>
                <option value="degree">degree</option>
                <option value="masters">masters</option>
                <option value="phd">phd</option>
              </select>
              {formik.errors.education && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.education}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <label>Experience</label>
              <textarea
                className="p-2 border rounded-md max-h-36 min-h-fit"
                type="date"
                name="experience"
                onChange={(e) => setexperience(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Instractor Phonenumber - one </label>
              <input
                className="p-2 border rounded-md"
                type="number"
                name="instractor_phone_one"
                onChange={(e) => setinstractor_phone_one(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Instractor Phonenumber - two </label>
              <input
                className="p-2 border rounded-md"
                type="number"
                name="instractor_phone_two"
                onChange={(e) => setinstractor_phone_two(e.target.value)}
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
                name="educational_state"
                onChange={(e) => seteducational_state(e.target.value)}
                id="educational_state"
              >
                <option value="Medium Instractor">Medium Instractor</option>
                <option value="Higher Instractor">Higher Instractor</option>
                <option value="CAF D Instractor">CAF D Instractor</option>
                <option value="CAF C Instractor">CAF C Instractor</option>
                <option value="CAF B Instractor">CAF B Instractor</option>
                <option value="CAF A Instractor">CAF A Instractor</option>
                <option value="CAF Pro Instractor">CAF Pro Instractor</option>
                <option value="FIFA Instractor">FIFA Instractor</option>
            
              </select>
            </div>
            <div>
              {/* {educations.map((education, index) => { */}
                {/* return ( */}
                  <div  className="flex flex-col space-y-1 my-5">
                    <div className="font-semibold text-md" onChange={(e) => seteducational_state(e.target.value)}>
                      {education.educational_state_title}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Certification Id </label>
                      <input
                        className="p-2 border rounded-md"
                        type="text"
                        name="certification_id"
                        onChange={(e) => setcertification_id(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Date of certificate concede </label>
                      <input
                        className="p-2 border rounded-md"
                        type="date"
                        name="date_of_certificate_concede"
                        onChange={(e) => setdate_of_certificate_concede(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col sapce-y-1">
                      <label>Place of certificate concede </label>
                      <input
                        className="p-2 border rounded-md"
                        type="text"
                        name="place_of_certificate_concede"
                        onChange={(e) => setplace_of_certificate_concede(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Attach Document </label>
                      <input
                        className="p-2 border rounded-md"
                        type="file"
                        name="educational_document"
                        onChange={e=>setfileSingle(e.target.files[0])}
                      />
                    </div>
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
              fd.append('instractor_phone_one',instractor_phone_one)
              fd.append('instractor_phone_two',instractor_phone_two)
              fd.append('certification_id',certification_id)
              fd.append('educational_state',educational_state)
              fd.append('date_of_certificate_concede',date_of_certificate_concede)
              fd.append('place_of_certificate_concede',place_of_certificate_concede)
              fd.append('fileSingle',fileSingle)
          
              
              // console.log(value);
          
              instance.post("/createInstractor", fd).then(
                res=>{
                  console.log(res)
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

export default AddEditInstructor;
