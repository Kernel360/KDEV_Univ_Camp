const BASE_URL =
  "http://ec2-3-35-4-55.ap-northeast-2.compute.amazonaws.com:8080";

/**
 * 회원가입 API 호출 함수
 * @param {string} username - 사용자 아이디
 * @param {string} password - 사용자 비밀번호
 * @returns {Promise<Object>} - 회원가입 성공 여부 반환
 */
export const signup = async (username, password, nickname) => {
  try {
    const response = await fetch(`${BASE_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        nickname: "test", // 고정된 닉네임 값
      }),
    });

    if (!response.ok) {
      throw new Error("회원가입 실패: " + response.statusText);
    }

    const data = await response.json();
    return data; // 회원가입 성공 메시지 반환
  } catch (error) {
    console.error("회원가입 에러:", error);
    throw error;
  }
};
