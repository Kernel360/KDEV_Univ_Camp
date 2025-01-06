import React from "react";
import "../App.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>
              사용 일자
              <br />
              (요일)
            </th>
            <th>부서</th>
            <th>성명</th>
            <th>
              주행전 계기판의
              <br />
              거리(km)
            </th>
            <th>
              주행후 계기판의
              <br />
              거리(km)
            </th>
            <th>주행거리(km)</th>
            <th>업무용 사용거리(km)</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2022-03-30(수)</td>
            <td>평택지점</td>
            <td></td>
            <td>67,848.2</td>
            <td>67,849.7</td>
            <td>1.5</td>
            <td>
              출근용: 0.0
              <br />
              일반업무용: 1.5
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022-03-30(수)</td>
            <td>평택지점</td>
            <td></td>
            <td>67,849.7</td>
            <td>67,851.5</td>
            <td>1.8</td>
            <td>
              출근용: 0.0
              <br />
              일반업무용: 1.8
            </td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>2022-03-31(목)</td>
            <td>평택지점</td>
            <td>유윤식 지점장</td>
            <td>67,851.5</td>
            <td>67,881.7</td>
            <td>30.2</td>
            <td>
              출근용: 0.0
              <br />
              일반업무용: 30.2
            </td>
            <td>
              수원지점 방문 (지역
              <br />
              회의 참석)
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>2022-04-06(수)</td>
            <td>평택지점</td>
            <td></td>
            <td>67,984.0</td>
            <td>67,989.6</td>
            <td>5.6</td>
            <td>
              출근용: 0.0
              <br />
              일반업무용: 5.6
            </td>
            <td></td>
          </tr>
          <tr>
            <td>22</td>
            <td>2022-04-06(수)</td>
            <td>평택지점</td>
            <td></td>
            <td>67,989.6</td>
            <td>67,992.8</td>
            <td>3.2</td>
            <td>
              출근용: 0.0
              <br />
              일반업무용: 3.2
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
