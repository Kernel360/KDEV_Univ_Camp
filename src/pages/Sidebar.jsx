import React from "react";
import UserInfo from "./UserInfo";
import PeriodSearch from "./TabContent/PeriodSearch";
import VehicleSearch from "./TabContent/VehicleSearch";
import VehicleStats from "./TabContent/VehicleStats";
import periodIcon from "../assets/calendar.png";
import searchIcon from "../assets/car.png";
import statsIcon from "../assets/map.png";
import "./Sidebar.css";

const Sidebar = ({ activeTab, setActiveTab, navigate }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "기간검색":
        return <PeriodSearch />;
      case "차량검색":
        return <VehicleSearch />;
      case "차량정보":
        return <VehicleStats />;
      default:
        return null;
    }
  };

  return (
    <div className="left-sidebar">
      <UserInfo navigate={navigate} />
      <div className="content-area">{renderContent()}</div>
      <div className="icon-menu">
        <img
          src={periodIcon}
          alt="기간검색"
          onClick={() => setActiveTab("기간검색")}
        />
        <img
          src={searchIcon}
          alt="차량검색"
          onClick={() => setActiveTab("차량검색")}
        />
        <img
          src={statsIcon}
          alt="차량정보"
          onClick={() => setActiveTab("차량정보")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
