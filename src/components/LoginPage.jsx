import React from "react";
import "./auth.css";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 처리 로직 실행");
  };

  return (
    <div className="login-page">
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력하세요" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="submit" className="login-submit-button">
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
