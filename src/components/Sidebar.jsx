import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [userName] = useState("000님"); // 사용자 이름 설정
  const [showSubMenu, setShowSubMenu] = useState(false); // 서브메뉴 표시 여부 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handleLogin = () => {
    navigate("/login"); // 로그인 페이지로 이동
  };

  const handleSignup = () => {
    navigate("/signup"); // 회원가입 페이지로 이동
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu); // 서브메뉴 표시/숨김 상태 전환
  };

  return (
    <div className="sidebar-section">
      <div className="user-section">
        {/* 사용자 이미지 */}
        <div className="user-image-container">
          <img src="/user-circle.png" alt="User" className="user-image" />
        </div>
        {/* 사용자 정보 텍스트 */}
        <div className="user-info-text">
          <p>{userName}</p>
        </div>
        {/* 로그인 및 회원가입 버튼 */}
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
          관제 차량의 운행 일지를 생성 관리 하며,
          <br />
          목적지를 운행일지의 일시에 맞춰 운행일지 관리를
          <br />
          할 수 있으며 엑셀 형식으로 다운로드 받아
          <br />
          차량 관리 업무에 유용하게 쓸 수 있습니다.
        </p>
        <ul>
          <li>
            {/* 운행분석 버튼 */}
            <button className="menu-button" onClick={toggleSubMenu}>
              운행분석
            </button>
            {/* 하위 메뉴: 운행일지와 운행내역 */}
            {showSubMenu && (
              <ul className="sub-menu">
                <li>
                  <button className="sub-menu-button">운행일지</button>
                </li>
                <li>
                  <button className="sub-menu-button">운행내역</button>
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
