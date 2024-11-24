import React, { useContext, useState } from "react"
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/UserSlice";
import ROLE from "../common/Role";
import SummaryApi from "../common/Domain&Api";


function Home() {
  const user = useSelector((state) => state?.user?.user);
  const navigate =useNavigate()
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState();


  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate('/')
    } else {
      toast.error(data.message);
    }
  };

  return (
    <header className="shadow-md bg-white fixed z-40 w-full">
      <div className=" h-full  mx-auto flex items-center justify-between px-2 lg:px-2 py-2">
        <div className=" font-semibold">
          <Link to="/home">
          
          Home
          </Link>
        </div>
          
          <div>
            <Link to='/all-employee' className=" font-semibold">Employee List</Link>
          </div>
        <div className=" flex items-center gap-7">
          <div className="relative  flex justify-center ">
            {
              user?._id && (
              <div
              onClick={() => setMenuDisplay(!menuDisplay)}
              className="text-3xl cursor-pointer"
            >
            <p className=" text-lg font-semibold mt-1 mr-4">{user?.name} </p> 
            </div>
              )
            }
            {menuDisplay && (
              <div className=" absolute bg-white bottom-0 top-11 h-fit p-2  rounded-lg shadow-lg hidden md:flex">
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to="/admin-panel"
                      className=" whitespace-nowrap hover:bg-slate-200 p-2 "
                      onClick={() => setMenuDisplay(!menuDisplay)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          
        
         
          <div>
            {user?._id ? (
              <button
                className=" px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-800 "
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/"
                className=" px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-800 "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
