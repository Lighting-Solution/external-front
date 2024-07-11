import React, { useState } from "react";
import "../css/InquiryDetail.css";
import axios from "axios";

const InquiryDetail = () => {
  const [inquiryData, setInquiryData] = useState({
    companyName: "예시 회사명",
    name: "예시 이름",
    tel: "010-1234-5678",
    email: "example@example.com",
    message: "문의 내용 예시입니다.",
    inquiryState: false,
    manager: "", // 담당자 필드 추가
  });

  const handleStateChange = (e) => {
    setInquiryData({
      ...inquiryData,
      inquiryState: e.target.checked,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryData({
      ...inquiryData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .put(
        "http://localhost:9001/api/v1/lighting_solutions/inquiry/update",

        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data) {
          alert("Login successful!");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during login.");
      });
  };

  const handleSubmit = () => {
    // 전송 로직 추가
    alert("전송 버튼 클릭");
  };

  const handleList = () => {
    // 목록으로 가는 로직 추가
    alert("목록으로 버튼 클릭");
  };

  return (
    <div className="inquiry-detail-container">
      <h2 className="inquiry-detail-title">CUSTOMER INQUIRY DETAIL</h2>
      <div className="inquiry-detail-form">
        <div className="form-group">
          <label>회사명</label>
          <input type="text" value={inquiryData.companyName} readOnly />
        </div>
        <div className="form-group">
          <label>이름</label>
          <input type="text" value={inquiryData.name} readOnly />
        </div>
        <div className="form-group">
          <label>연락처</label>
          <input type="text" value={inquiryData.tel} readOnly />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input type="text" value={inquiryData.email} readOnly />
        </div>
        <div className="form-group form-group-full">
          <label>내용</label>
          <textarea value={inquiryData.message} readOnly />
        </div>
        <div className="form-group">
          <label>담당자</label>
          <input
            type="text"
            name="manager"
            value={inquiryData.manager}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group form-group-checkbox">
          <label className="checkbox-label">
            문의 상태
            <input
              type="checkbox"
              checked={inquiryData.inquiryState}
              onChange={handleStateChange}
              className="checkbox"
            />
          </label>
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleSubmit} className="btn btn-primary">
          전송
        </button>
        <button onClick={handleUpdate} className="btn btn-warning">
          수정
        </button>
        <button onClick={handleList} className="btn btn-secondary">
          목록으로
        </button>
      </div>
    </div>
  );
};

export default InquiryDetail;
