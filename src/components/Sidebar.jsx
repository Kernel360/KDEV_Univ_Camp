import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../assets/user-circle.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [userName, setUserName] = useState("로그인하세요");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserName(data.name || "로그인하세요");
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserName("로그인하세요");
      }
    };
    fetchUserName();
  }, []);

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const toggleSubMenu = () => setShowSubMenu(!showSubMenu);

  const handleSubMenuClick = (menu) => {
    if (menu === "운행일지") {
      navigate("/log");
    } else if (menu === "운행내역") {
      navigate("/details");
    }
  };

  return (
    <div className="sidebar-section">
      <div className="user-section">
        <div className="user-image-container">
          <img
            src={userImage}
            alt="사용자 프로필 사진"
            className="user-image"
          />
        </div>
        <div className="user-info-text">
          <p>{userName}</p>
        </div>
        <div className="auth-buttons">
          <button onClick={handleLogin} className="login-button">
            로그인
          </button>
          <button onClick={handleSignup} className="signup-button">
            회원가입
          </button>
        </div>
      </div>
      <div className="menu">
        <h2>차량 운행 일지 &gt; 상세보기</h2>
        <p>
          관제 차량의 운행 일지를 생성 관리하며,
          <br />
          목적지를 운행일지의 일시에 맞춰 운행일지 관리를
          <br />
          할 수 있으며 엑셀 형식으로 다운로드 받아
          <br />
          차량 관리 업무에 유용하게 쓸 수 있습니다.
        </p>
        <ul>
          <li>
            <button className="menu-button" onClick={toggleSubMenu}>
              운행분석
            </button>
            {showSubMenu && (
              <ul className="sub-menu">
                <li>
                  <button
                    className="sub-menu-button"
                    onClick={() => handleSubMenuClick("운행일지")}
                  >
                    운행일지
                  </button>
                </li>
                <li>
                  <button
                    className="sub-menu-button"
                    onClick={() => handleSubMenuClick("운행내역")}
                  >
                    운행내역
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="menu-button">예약현황</button>
          </li>
          <li>
            <button className="menu-button">환경설정</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
