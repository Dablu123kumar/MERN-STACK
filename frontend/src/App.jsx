import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch } from "react-redux";
import SummaryApi from "./common/Domain&Api";
import { setUserDetails } from "./store/UserSlice";
import Context from "./context/ContextApi";

function App() {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };
  useEffect(() => {
    // user details
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider value={fetchUserDetails}>
        <ToastContainer position="top-center" />
        <main>
          <Outlet />
        </main>
      </Context.Provider>
    </>
  );
}

export default App;
