import React from "react";
import "./auth.css";

const SignupPage = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("회원가입 처리 로직 실행");
  };

  return (
    <div className="signup-page">
      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력하세요" />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력하세요" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="submit" className="signup-submit-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
