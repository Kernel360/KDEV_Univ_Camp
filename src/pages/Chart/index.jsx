import React from "react";

const Chart = ({ selectedDate }) => {
  return (
    <div className="chart-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>과세기간</th>
            <th>업무승용차 운행기록부</th>
            <th>차종</th>
            <th>자동차 등록번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {selectedDate.startDate && selectedDate.endDate
                ? `${selectedDate.startDate} - ${selectedDate.endDate}`
                : ""}
            </td>
            <td>&nbsp;</td> {/* 빈 셀은 &nbsp;로 대체 */}
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
