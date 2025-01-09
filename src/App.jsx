import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Viewer from "./components/Viewer";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import Table from "./components/Table";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Gps from "./pages/Gps";

function App() {
  const [selectedDate, setSelectedDate] = useState({
    startDate: "",
    endDate: "",
  });

  return (
    <Routes>
      {/* 기본 레이아웃 (Sidebar와 Main Section 포함) */}
      <Route
        path="/"
        element={
          <div className="App">
            <section className="sidebar-section">
              <Sidebar />
            </section>
            <section className="main-section">
              <div className="viewer-section">
                <Viewer
                  onDateChange={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>
              <div className="chart-section">
                <Chart selectedDate={selectedDate} />
              </div>
              <div className="table-section">
                <Table />
              </div>
            </section>
          </div>
        }
      />
      {/* 로그인 페이지 */}
      <Route path="/login" element={<LoginPage />} />
      {/* 회원가입 페이지 */}
      <Route path="/signup" element={<SignupPage />} />
      {/* GPS 페이지 */}
      <Route path="/gps" element={<Gps />} />
    </Routes>
  );
}

export default App;
