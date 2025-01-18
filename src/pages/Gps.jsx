import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import Sidebar from "./Sidebar";
import IconMenu from "./IconMenu";
import "./Gps.css";

const Gps = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("기간검색");

  return (
    <div className="app-container">
      <IconMenu setActiveTab={setActiveTab} /> {/* IconMenu 추가 */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigate={navigate}
      />
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default Gps;
