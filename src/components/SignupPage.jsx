import React, { useRef } from "react";
import "./signup.css";

const SignupPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSignup = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 회원가입 처리 로직 (API 요청 등)
    console.log("회원가입 요청:", { username, password });

    alert("회원가입 성공!");
  };

  return (
    <div className="signup-page">
      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">아이디</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            ref={passwordRef}
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
