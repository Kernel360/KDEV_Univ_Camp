import React, { useState, useRef } from "react";
import { signup } from "../../api/signupApi"; // 회원가입 API 호출
import "./signup.css";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      setLoading(false);
      return;
    }

    try {
      await signup(username, password); // 회원가입 API 호출
      alert("회원가입 성공!");
      setErrorMessage("");
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.error("회원가입 에러:", error);
      setErrorMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
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
        <button
          type="submit"
          className="signup-submit-button"
          disabled={loading}
        >
          {loading ? "회원가입 중..." : "회원가입"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
