import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import { MdDelete, MdEdit } from "react-icons/md";
import SummaryApi from "../common/Domain&Api";
import { FaRegCircleUser } from "react-icons/fa6";

import { Link } from "react-router-dom"
import Home from "./Home";

function AllEmployee() {
  /// for allEmployee
  const [allEmployee, setAllEmployee] = useState([]);
  const fetchAllEmployees = async () => {
    const fetchData = await fetch(SummaryApi.allEmployee.url, {
      method: SummaryApi.allEmployee.method,
      credentials: "include",
    });
    const dataResponse = await fetchData.json();
    if (dataResponse) {
      setAllEmployee(dataResponse.data);
    } else {
      toast.error(dataResponse.message);
    }
  };


  /// delete employee

  const handleDelete = async (id) => {
    const deleteApiUrl = SummaryApi?.deleteEmployee?.url;
    const deleteApiMethod = SummaryApi?.deleteEmployee?.method;
    // console.log("id", id);
    const fetchData = await fetch(`${deleteApiUrl}/${id}`, {
      method: deleteApiMethod,
      credentials: "include",
    });
    const dataResponse = await fetchData.json();
    if (dataResponse.success) {
      toast.success(dataResponse.message);
      fetchAllEmployees();
    } else {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);


  // search employee

  const handleSearch = async(e)=>{

    const key = e.target.value
    // const searchParams = new URLSearchParams()
    // if(key) searchParams.append('key',key);
    // if (date) searchParams.append('date', date); 
    // if (id) searchParams.append('id', id);
    // const searchQuery = searchParams.toString();
    if(!key){
        fetchAllEmployees()
    }
     else{
        try {
          const searchApiUrl = SummaryApi.searchEmployee.url
        const searchApiMethod = SummaryApi.searchEmployee.method
        const fetchData = await fetch(`${searchApiUrl}/${key}`, {
            method: searchApiMethod,
            credentials: "include",
          });
          const dataResponse = await fetchData.json();

          if (dataResponse.success) {
            setAllEmployee(dataResponse.data)
          
            // console.log('searchedemp',allEmployee)
          } else {
            toast.error(dataResponse.message);
          }
        } catch (error) {
          console.log('Error in searching employee',error)
          toast.error("No keyword matched please enter valid keyword ")
        }
     }

  }

  return (
    <div className=" relative bg-white pb-4 h-[calc(100vh-128px)] overflow-y-scroll scroll-bar">
      <Home />
      <div className=" mt-14">
        <div className=" w-full bg-yellow-500">
          <h2>Employee List</h2>
        </div>
        <div className=" w-full flex justify-end gap-40 font-medium ">
          <h3>Total Employee : {allEmployee.length} </h3>
          <Link
            to={"/emp-signup"}
            className=" bg-green-500 px-2 hover:bg-green-800"
          >
            Create Employee
          </Link>
        </div>
      </div>
      <div className=" w-full flex justify-end gap-30 bg-black text-white">
        <label>Search</label>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Enter Search Keyword for name and email "
          className="  w-[40%]  ml-10  text-black placeholder:text-gray-500 placeholder:px-10 placeholder:text-center px-1 outline-none border border-gray-950"
        />
      </div>
      {
        (allEmployee.length <= 0) ? (
            <h1 className=" font-bold text-center mt-10">please create employee</h1>
        ):
        (
<table className=" w-full userTable ">
        <thead>
          <tr className=" bg-black text-white">
            <th>Sr. no</th>
            <th> Image</th>
            <th> Name</th>
            <th> Email</th>
            <th>Mobile No</th>
            <th>Desingnation</th>
            <th>Gender</th>
            <th>course</th>
            <th> Created Date</th>
            <th> Action</th>
          </tr>
        </thead>
          <tbody>
            {allEmployee.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>
                    {el?.profilePic ? (
                      <img
                        src={el?.profilePic}
                        alt={el?.name}
                        className=" h-8 w-8 rounded-full ml-2 "
                      />
                    ) : (
                      <FaRegCircleUser className=" h-7 w-7 rounded-full ml-2 " />
                    )}
                  </td>
                  <td>{el?.name} </td>
                  <td>{el?.email} </td>
                  <td>{el?.mobile} </td>
                  <td>{el?.desingnation} </td>
                  <td>{el?.gender} </td>
                  <td>{el?.course} </td>
                  <td>{moment(el?.createdAt).format("L")} </td>
                  <td className=" flex">
                    <Link
                      to={"/emp-update/" + el._id}
                      className="  bg-green-200 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white "
                    >
                      <MdEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(el?._id)}
                      className="  bg-green-200 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white ml-2"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
      </table>
        )
      }
      
    </div>
  );
}

export default AllEmployee;
