import React, { useEffect } from "react";
import "./Map.css";
import carIcon from "../assets/carMarker.png";

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 초기 지도 중심좌표
          level: 10, // 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options);

        // HTML5 Geolocation 사용 여부 확인
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도

            const locPosition = new window.kakao.maps.LatLng(lat, lon); // 접속 위치 좌표
            const message = '<div style="padding:5px;">현재위치</div>'; // 인포윈도우 내용

            // 마커와 인포윈도우 표시
            displayMarker(locPosition, message, true); // Geolocation으로 생성된 마커는 커스텀 이미지 사용
          });
        } else {
          const locPosition = new window.kakao.maps.LatLng(
            33.450701,
            126.570667
          );
          const message = "geolocation을 사용할수 없어요..";

          // 마커와 인포윈도우 표시
          displayMarker(locPosition, message, false); // 기본 위치 마커 생성
        }

        // 지도 클릭 이벤트 추가
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

        // 지도에 마커와 인포윈도우 표시 함수
        function displayMarker(locPosition, message, useCustomIcon) {
          const markerOptions = {
            map: map,
            position: locPosition,
          };

          if (useCustomIcon) {
            const imageSize = new window.kakao.maps.Size(50, 75);
            const imageOption = { offset: new window.kakao.maps.Point(25, 75) };

            const markerImage = new window.kakao.maps.MarkerImage(
              carIcon,
              imageSize,
              imageOption
            );
            markerOptions.image = markerImage; // 커스텀 이미지 적용
          }

          const marker = new window.kakao.maps.Marker(markerOptions);

          const iwContent = message; // 인포윈도우 내용
          const iwRemoveable = true; // 인포윈도우 닫기 버튼

          const infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          infowindow.open(map, marker); // 인포윈도우 표시

          map.setCenter(locPosition); // 지도 중심 좌표 변경
        }
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

  return <div id="map" className="map-container"></div>;
};

export default Map;
