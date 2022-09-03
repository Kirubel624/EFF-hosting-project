import instance from "../../utils/axios";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoach, resetAddCoach } from "../../store/coach/actions";
import Modal from "../../components/modal";
import Dialog from "../../components/dialog";
import { PulseLoader } from "react-spinners";
import { createFormData } from "../../utils/formdata";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const scales = [
  {
    name: "first_level",
    title: "First Level",
  },
  {
    name: "second_level",
    title: "Second Level",
  },
  {
    name: "caf_d_coach",
    title: "CAF D Coach",
  },
  {
    name: "caf_c_coach",
    title: "CAF C Coach",
  },
  {
    name: "caf_b_coach",
    title: "CAF B Coach",
  },
  {
    name: "caf_a_instarctor",
    title: "CAF A Coach",
  },
  {
    name: "caf_pro_coach",
    title: "CAF Pro Coach",
  },
];

const UpdateCoachT = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // const {
  //   loading: addCoachLoading,
  //   success: addCoachSuccess,
  //   error: addCoachError,
  // } = useSelector((state) => state.addCoach);

  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const onImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };
  const [educations, setEducations] = useState([]);


  useEffect(() => {
    (async function () {
      const data = await axios.get(
        `http://localhost:8000/coaches/${params.id}`
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
    setEducations(_educations);
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
    setEducations([]);
    setImage(null);
  };

  const onCancelHandler = (e) => {};

  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    dob: new Date().toISOString().split("T")[0],
    gender: "",
    place_of_birth: "",
    nationality: "",
    passport_number: "",
    education: "",
    experience: "",
    coach_phone_one: "",
    coach_phone_two: "",
    certification_id: "",
    educational_state: "",
    date_of_certificate_concede: "",
    place_of_certificate_concede: "",
  });
  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    e.preventDefault();
    // console.log(value);

    instance.post("/createcoach", value);
    console.log(value);
    navigate("/admin/coaches");
  };
  return (
    <form onSubmit={handleValidation}>
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
          Add Coach
        </div>
        <div className="p-7 bg-white">
          <div className="capitalize my-2 font-semibold text-lg">
            basic information
          </div>
          <div className="space-y-3">
            {/* <div className=""> */}
            {/* <label>photo</label>
              {formik.errors.image && (
                <div className="my-1 text-red-500 text-sm">
                  {formik.errors.image}
                </div>
              )} */}
            {/* <div
                className={`h-36 w-36 bg-gray-100 ${
                  !image && "border-2"
                } border-dashed border-gray-500 flex justify-center items-center relative mt-1`}
              > */}
            {/* <span
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
                </span> */}
            {/* {!image && (
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
                  <img src={image} className="h-full w-full object-cover" />
                )}
              </div> */}

            {/* <input
                ref={imageRef}
                className="hidden"
                type="file"
                onChange={onImageChange}
              /> */}
            {/* </div>  */}

            <div className="flex flex-col">
              <label>first name</label>

              <input
                className="p-2 border rounded-md"
                placeholder={data.first_name}
                type="text"
                name="first_name"
                value={value.first_name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>middle name</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.middle_name}
                type="text"
                name="middle_name"
                value={value.middle_name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>last name</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.last_name}
                type="text"
                name="last_name"
                value={value.last_name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>gender</label>
              <select
                className="form-control"
                onChange={(e) => onChangeHandler(e)}
                name="gender"
                value={value.gender}
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
                placeholder={data.email}
                type="email"
                name="email"
                value={value.email}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Nationality</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.nationality}
                type="text"
                name="nationality"
                value={value.nationality}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Place of Birth</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.place_of_birth}
                type="text"
                name="place_of_birth"
                value={value.place_of_birth}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Passport Number</label>
              <input
                className="p-2 border rounded-md"
                placeholder={data.passport_number}
                type="text"
                name="passport_number"
                value={value.passport_number}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Date of Birth</label>
              <input
                className="p-2 border rounded-md"
                type="date"
                placeholder={data.dob}
                name="dob"
                value={value.dob}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Education</label>
              <select
                className="p-2 border rounded-md bg-white"
                name="education"
                value={value.education}
                onChange={(e) => onChangeHandler(e)}
              >
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
                name="experience"
                placeholder={data.experience}
                value={value.experience}
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Coach Phonenumber - one </label>
              <input
                className="p-2 border rounded-md"
                type="number"
                placeholder={data.coach_phone_one}
                name="coach_phone_one"
                value={value.coach_phone_one}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Coach Phonenumber - two </label>
              <input
                className="p-2 border rounded-md"
                type="number"
                placeholder={data.coach_phone_two}
                name="coach_phone_two"
                value={value.coach_phone_two}
                onChange={(e) => onChangeHandler(e)}
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
                value={value.educational_state}
                onChange={(e) => {
                  const _educations = scales
                    .slice(0, e.target.value)
                    .map((state, index) => {
                      return {
                        certification_id: "",
                        educational_state_title: state.title,
                        educational_state_name: state.name,
                        date_of_certificate_concede: new Date()
                          .toISOString()
                          .split("T")[0],
                        place_of_certificate_concede: "",
                        educational_document: null,
                        error: null,
                      };
                    });
                  setEducations(_educations);
                  onChangeHandler(e);
                }}
              >
                {scales.map((scale, index) => {
                  return (
                    <option key={index} value={index}>
                      {scale.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              {educations.map((education, index) => {
                return (
                  <div key={index} className="flex flex-col space-y-1 my-5">
                    <div className="font-semibold text-md">
                      {education.educational_state_title}
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Certification Id </label>
                      <input
                        className="p-2 border rounded-md"
                        type="text"
                        name="certification_id"
                        value={value.certification_id}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Date of certificate concede </label>
                      <input
                        className="p-2 border rounded-md"
                        type="date"
                        name="date_of_certificate_concede"
                        value={value.date_of_certificate_concede}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    </div>
                    <div className="flex flex-col sapce-y-1">
                      <label>Place of certificate concede </label>
                      <input
                        className="p-2 border rounded-md"
                        type="text"
                        name="place_of_certificate_concede"
                        value={value.place_of_certificate_concede}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label>Attach Document </label>
                      {/* <input
                        className="p-2 border rounded-md"
                        type="file"
                        name="educational_document"
                        onChange={onEducationChange(index)}
                      /> */}
                    </div>
                  </div>
                );
              })}
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
            type="submit"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateCoachT;
