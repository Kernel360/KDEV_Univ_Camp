import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import Sidebar from "./Sidebar";
import "./Gps.css";

const Gps = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("기간검색");

  return (
    <div className="app-container">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigate={navigate}
      />
      <Map />
    </div>
  );
};

export default Gps;
