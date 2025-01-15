import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gps.css";
import userCircle from "../assets/user-circle.png";
import periodIcon from "../assets/calendar.png";
import searchIcon from "../assets/car.png";
import statsIcon from "../assets/map.png";

const Gps = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("기간검색");

  useEffect(() => {
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5665, 126.978),
          map: map,
        });

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;
            console.log(
              "클릭한 위치의 좌표:",
              latlng.getLat(),
              latlng.getLng()
            );
          }
        );
      } else {
        console.error("Kakao maps API가 로드되지 않았습니다.");
      }
    };

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=273162e89b73e08bbf2a0524708342e1&autoload=false`;
    script.async = true;
    script.onload = () => window.kakao.maps.load(initMap);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "기간검색":
        return (
          <div className="date-search">
            <h3>기간 검색</h3>
            <div className="date-picker">
              <input type="date" />
              <span>부터</span>
              <input type="date" />
              <span>까지</span>
            </div>
          </div>
        );
      case "차량검색":
        return (
          <div className="search-section">
            <h3>차량 검색</h3>
            <div className="vehicle-search">
              <select>
                <option>차량 번호</option>
                <option>차량 이름</option>
              </select>
              <input type="text" placeholder="검색어를 입력하세요" />
              <button>검색</button>
            </div>
          </div>
        );
      case "차량정보":
        return (
          <div className="stats-container">
            <div className="stat-card" style={{ backgroundColor: "#d5e8ff" }}>
              <h3>70</h3>
              <p>전체 차량</p>
            </div>
            <div className="stat-card" style={{ backgroundColor: "#d4f7e2" }}>
              <h3>45</h3>
              <p>운행 차량</p>
            </div>
            <div className="stat-card" style={{ backgroundColor: "#ffe4cc" }}>
              <h3>20</h3>
              <p>미운행 차량</p>
            </div>
            <div className="stat-card" style={{ backgroundColor: "#e4e4e4" }}>
              <h3>5</h3>
              <p>미결제 차량</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* 왼쪽 사이드바 */}
      <div className="left-sidebar">
        <div className="user-info">
          <img src={userCircle} alt="User Icon" className="user-icon" />
          <div className="auth-buttons">
            <button onClick={() => navigate("/login")}>로그인</button>
            <button onClick={() => navigate("/signup")}>회원가입</button>
          </div>
        </div>
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

      {/* 지도 영역 */}
      <div className="map-container">
        <div id="map"></div>
      </div>
    </div>
  );
};

export default Gps;
