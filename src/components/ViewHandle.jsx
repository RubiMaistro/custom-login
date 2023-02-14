import React from "react";
import { Home } from "../pages/Home";
import { DataList } from "../pages/DataList";
import { Routes, Route, useNavigate } from "react-router-dom";

export const ViewHandle = ({email, password, setCredentials, logout}) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  }

  const navigateDataList = () => {
    navigate("/data");
  }

  return (
    <div className="view">
      <button onClick={navigateHome}>Home</button>
      <button onClick={navigateDataList}>Data</button>
      <button onClick={() => logout()}>Logout</button>
      <Routes>
        <Route path="/" element={<Home email={email} password={password} />}></Route>
        <Route path="/data" element={<DataList />}></Route>
      </Routes>
    </div>
  )
}

export default Home;