import React from "react";
import "./Viewer.css";

const Viewer = ({ onDateChange, selectedDate }) => {
  const [startDate, setStartDate] = React.useState(selectedDate.startDate);
  const [endDate, setEndDate] = React.useState(selectedDate.endDate);

  const handleDateChange = () => {
    onDateChange({ startDate, endDate });
  };

  return (
    <div className="viewer-container">
      {/* 상단: 차량 번호 */}
      <div className="viewer-header">
        <div className="car-number">96노 0432</div>
      </div>

      {/* 중단: 왼쪽 버튼, 오른쪽 드롭다운/날짜/검색 버튼 */}
      <div className="viewer-middle">
        <div className="left-buttons">
          <button className="viewer-button">편집하기</button>
          <button className="viewer-button">목록</button>
        </div>
        <div className="right-controls">
          <select className="viewer-select">
            <option value="default">기본보기</option>
            <option value="option1">옵션1</option>
            <option value="option2">옵션2</option>
          </select>
          <div className="date-inputs">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="date-input"
            />
            <span className="date-separator"> - </span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="date-input"
            />
          </div>
          <button onClick={handleDateChange} className="viewer-button">
            검색
          </button>
        </div>
      </div>

      {/* 하단: 출력 및 다운로드 버튼 */}
      <div className="viewer-footer">
        <div className="export-buttons">
          <button className="viewer-button">인쇄</button>
          <button className="viewer-button">엑셀</button>
          <button className="viewer-button">상세엑셀</button>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
