import React, { useEffect } from "react";
import "./Map.css";

const Map = () => {
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

  return <div id="map" className="map-container"></div>;
};

export default Map;
