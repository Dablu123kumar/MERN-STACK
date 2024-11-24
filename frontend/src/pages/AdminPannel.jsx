import React, { useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/Role";
import Home from "./Home";

function AdminPannel() {
  const user = useSelector((state) => state?.user?.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className=" w-full h-full flex flex-col ">
      <Home/>
      <div className="mt-20 text-center ">
          <p>Welcome To Admin Pannel</p>
      </div>
    </div>
  );
}

export default AdminPannel;
