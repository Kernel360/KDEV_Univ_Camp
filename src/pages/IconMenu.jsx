import React from "react";
import periodIcon from "../assets/calendar.png";
import searchIcon from "../assets/car.png";
import statsIcon from "../assets/map.png";

const IconMenu = ({ setActiveTab }) => {
  return (
    <div className="icon-menu">
      <div className="icon" onClick={() => setActiveTab("기간검색")}>
        <img
          src={periodIcon}
          alt="기간검색"
          style={{ width: "50px", height: "auto" }} /* 수정된 부분 */
        />
      </div>
      <div className="icon" onClick={() => setActiveTab("차량검색")}>
        <img
          src={searchIcon}
          alt="차량검색"
          style={{ width: "50px", height: "auto" }} /* 수정된 부분 */
        />
      </div>
      <div className="icon" onClick={() => setActiveTab("차량정보")}>
        <img
          src={statsIcon}
          alt="차량정보"
          style={{ width: "50px", height: "auto" }} /* 수정된 부분 */
        />
      </div>
    </div>
  );
};

export default IconMenu;
