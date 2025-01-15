import React from "react";
import userCircle from "../assets/user-circle.png";
import "./UserInfo.css";

const UserInfo = ({ navigate }) => {
  return (
    <div className="user-info">
      <img src={userCircle} alt="User Icon" className="user-icon" />
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>로그인</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </div>
    </div>
  );
};

export default UserInfo;
