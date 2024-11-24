import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import signinIcon from "../assets/signin.gif";
import SummaryApi from "../common/Domain&Api";
import { toast } from "react-toastify";

const AdminEditEmployee = () => {
  const params = useParams();
  const navigate = useNavigate()
  const updateApiUrl = SummaryApi?.updateEmployee?.url;
  const updateApiMethod = SummaryApi?.updateEmployee?.method;

  const [data, setData] = useState({
    profilePic: "",
    name: "",
    email: "",
    mobile: "",
    desingnation: "",
    gender: "",
    course: "",
  });

  // console.log("data", data);
  // console.log('allemp',allEmployee)



  useEffect(() => {
    // console.log("params", params);
    getEmpDetails();
  },[]);

  const getEmpDetails = async()=>{
    const Response = await fetch(`${updateApiUrl}/${params?.id}`, {
      method:updateApiMethod ,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    const dataResponse = await Response.json();
    // console.log("dataresponse", dataResponse.data);
    setData(dataResponse.data)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const Response = await fetch(`${updateApiUrl}/${params?.id}`, {
      method:updateApiMethod ,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await Response.json();
    // console.log("dataresponse", dataResponse.data);
    if (dataResponse?.success) {
      toast.success(dataResponse?.message);
      navigate("/all-employee");
    } else {
      toast.error(dataResponse?.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async () => {
    const file = e.target.files[0];
    const imagePic = await ImageToBase64(file);
    setData((prev) => {
      return { ...prev, profilePic: imagePic };
    });
  };

  return (
    <div>
      <div className=" fixed w-full h-full flex flex-col top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-40">
        <section id="Empsignup">
          <div className="container mx-auto p-4 h-[calc(100vh-65px)] overflow-y-scroll mt-16">
            <div className="bg-white  py-2 w-full max-w-md mx-auto">
              <div className=" w-16 h-16 mx-auto overflow-hidden rounded-full  relative">
                <div>
                  <img
                    src={data.profilePic || signinIcon}
                    alt="Login icons"
                    height={100}
                    width={100}
                  />
                </div>
                <form>
                  <label>
                    <input
                      type="file"
                      hidden
                      onChange={handleUploadPic}
                      required
                    />
                    {data.profilePic ? (
                      data.profilePic
                    ) : (
                      <div className=" absolute text-xs bg-opacity-80 text-center pb-4 pt-2 bg-slate-200 cursor-pointer -bottom-4 w-full text-red-600 font-medium">
                        Upload Photo
                      </div>
                    )}
                  </label>
                </form>
              </div>
              <form
                action=""
                className=" pt-5 flex flex-col gap-3 px-4 py-2 "
                onSubmit={handleSubmit}
              >
                <div className=" grid">
                  <label htmlFor="">Name</label>
                  <div className="bg-sky-200  rounded-full px-4 py-2">
                    <input
                      name="name"
                      value={data.name}
                      onChange={handleInput}
                      required
                      minLength={5}
                      type="text"
                      placeholder="Enter name"
                      className="w-full h-full bg-transparent outline-none  "
                    />
                  </div>
                </div>
                <div className=" grid">
                  <label htmlFor="">Email</label>
                  <div className="bg-sky-200  rounded-full px-4 py-2">
                    <input
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                      required
                      type="email"
                      placeholder="Enter email"
                      className="w-full h-full bg-transparent outline-none  "
                    />
                  </div>
                </div>
                <div className=" grid">
                  <label htmlFor="">Mobile No</label>
                  <div className="bg-sky-200  rounded-full flex  px-4 py-2">
                    <input
                      value={data.mobile}
                      name="mobile"
                      onChange={handleInput}
                      required
                      minLength={10}
                      type="number"
                      placeholder="Enter mobile no "
                      className="w-full h-full bg-transparent outline-none "
                    />
                  </div>
                </div>
                <div className=" grid">
                  <label htmlFor="">Desingnation</label>
                  <div className="bg-sky-200  rounded-full flex justify-end  px-4 py-2 ">
                    <select
                      name="desingnation"
                      onChange={handleInput}
                      value={data.desingnation}
                      className=" bg-transparent"
                    >
                      <option value="" hidden>
                        Select one
                      </option>
                      <option>HR</option>
                      <option>Sales</option>
                      <option>Manager</option>
                    </select>
                  </div>
                </div>
                <div className=" grid">
                  <label htmlFor="">Gender</label>
                  <div className="bg-sky-200  rounded-full flex justify-between  px-4 py-2 ">
                    <div className=" flex justify-center items-center gap-3 align-middle">
                      <label htmlFor="">Male</label>
                      <input
                        type="radio"
                        name="gender"
                        id=""
                        value="Male"
                        onChange={handleInput}
                      />
                    </div>
                    <div className=" flex justify-center items-center gap-3 align-middle">
                      <label htmlFor="">Female</label>
                      <input
                        type="radio"
                        name="gender"
                        id=""
                        value="Female"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>

                <div className=" grid">
                  <label htmlFor="">Course</label>
                  <div className="bg-sky-200  rounded-full flex justify-between  px-4 py-2 ">
                    <div className=" flex justify-center items-center gap-3 align-middle">
                      <label htmlFor="">MCA</label>
                      <input
                        type="checkbox"
                        name="course"
                        value="MCA"
                        onChange={handleInput}
                      />
                    </div>
                    <div className=" flex justify-center items-center gap-3 align-middle">
                      <label htmlFor="">BCA</label>
                      <input
                        type="checkbox"
                        name="course"
                        value="BCA"
                        onChange={handleInput}
                      />
                    </div>
                    <div className=" flex justify-center items-center gap-3 align-middle">
                      <label htmlFor="">BSC</label>
                      <input
                        type="checkbox"
                        name="course"
                        value="BSC"
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col">
                  <button className="bg-red-600 hover:bg-red-800 text-white px-8 py-1 rounded-full hover:scale-105 transition-all">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminEditEmployee;
