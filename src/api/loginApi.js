const BASE_URL =
  "http://ec2-52-79-227-43.ap-northeast-2.compute.amazonaws.com:8080";

/**
 * 로그인 API 호출 함수
 * @param {string} username - 사용자 아이디
 * @param {string} password - 사용자 비밀번호
 * @returns {Promise<string>} - JWT 토큰 반환
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("로그인 실패: " + response.statusText);
    }

    const data = await response.json();
    return data.token; // JWT 토큰 반환
  } catch (error) {
    console.error("로그인 에러:", error);
    throw error;
  }
};
