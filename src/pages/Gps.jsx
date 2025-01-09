import React, { useEffect } from "react";
import "./Gps.css";

const Gps = () => {
  useEffect(() => {
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        // 카카오 맵 생성
        const container = document.getElementById("map"); // 지도를 표시할 div
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 지도 중심 좌표 (서울)
          level: 3, // 지도 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가 (예: 서울 위치)
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5665, 126.978),
          map: map,
        });

        // 지도 클릭 이벤트
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

    // 카카오 지도 스크립트 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=273162e89b73e08bbf2a0524708342e1&autoload=false`;
    script.async = true;
    script.onload = () => window.kakao.maps.load(initMap); // kakao.maps.load 호출
    document.body.appendChild(script);

    return () => {
      // cleanup: 스크립트 제거
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app-container">
      {/* 사이드바 */}
      <div className="sidebar">
        <div className="user-info">
          <div className="user-icon">UserName</div>
          <div className="settings-icon">⚙️</div>
        </div>

        <div className="sidebar-menu">
          <button>위치보기</button>
          <button>경로보기</button>
        </div>

        <div className="search-section">
          <h3>차량 검색</h3>
          <input type="text" placeholder="차량번호" />
          <button>검색</button>
        </div>

        <div className="date-search">
          <h3>기간 검색</h3>
          <div className="date-picker">
            <input type="date" />
            <span>부터</span>
            <input type="date" />
            <span>까지</span>
          </div>
        </div>

        <div className="list-section">
          <h3>목록</h3>
          <div className="list-box">여기에 차량 목록 표시</div>
        </div>
      </div>

      {/* 지도와 통계 */}
      <div className="main-content">
        <div className="map-container">
          <div id="map"></div>
        </div>
        <div className="stats-container">
          <div className="stat-card total-cars">
            <h3>70</h3>
            <p>전체 차량</p>
          </div>
          <div className="stat-card running-cars">
            <h3>45</h3>
            <p>운행 차량</p>
          </div>
          <div className="stat-card parked-cars">
            <h3>20</h3>
            <p>미운행 차량</p>
          </div>
          <div className="stat-card unpaid-cars">
            <h3>5</h3>
            <p>미결제 차량</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gps;
