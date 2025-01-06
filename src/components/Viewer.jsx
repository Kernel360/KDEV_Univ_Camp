import React from "react";

const Viewer = ({ onDateChange, selectedDate }) => {
  const [startDate, setStartDate] = React.useState(selectedDate.startDate);
  const [endDate, setEndDate] = React.useState(selectedDate.endDate);

  const handleDateChange = () => {
    onDateChange({ startDate, endDate });
  };

  return (
    <div className="viewer-container">
      <div className="viewer-header">
        <div className="car-number">96노 0432</div>
        <div className="button-group">
          <button>편집하기</button>
          <button>목록</button>
        </div>
      </div>
      <div className="viewer-body">
        <div className="date-picker">
          <select>
            <option value="default">기본보기</option>
            <option value="option1">옵션1</option>
            <option value="option2">옵션2</option>
          </select>
          <div className="date-inputs">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span> - </span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button onClick={handleDateChange}>검색</button>
        </div>
        <div className="export-buttons">
          <button>인쇄</button>
          <button>엑셀</button>
          <button>상세엑셀</button>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
