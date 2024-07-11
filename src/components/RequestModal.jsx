import React, { useState, useEffect } from "react";
import "../css/AdminLoginModal.css";
import axios from "axios";

const RequestModal = ({ show, handleClose, requestData }) => {
  const [priceState, setPriceState] = useState(requestData.priceInt);
  const [count, setCount] = useState(1);
  const [content, setContent] = useState(
    `신청 조건 : ${requestData.name} \n ₩ ${requestData.priceInt}`
  );
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (show) {
      setPriceState(requestData.priceInt);
      setCount(1);
      setContent(
        `신청 조건 : ${requestData.name} \n ₩ ${requestData.priceInt}`
      );
      setCompanyName("");
      setName("");
      setTel("");
      setEmail("");
    }
  }, [show, requestData]);

  const increment = () => {
    setCount(count + 1);
    setPriceState(priceState + 1000);
    setContent(`신청 조건 : ${requestData.name} \n ₩ ${priceState + 1000}`);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setPriceState(priceState - 1000);
      setContent(`신청 조건 : ${requestData.name} \n ₩ ${priceState - 1000}`);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    const inquiryDTO = {
      companyName,
      name,
      tel,
      email,
      message: content,
      manager: "",
      inquiryState: false,
    };
    axios
      .post(
        `http://localhost:9001/api/v1/lighting_solutions/inquiry/create`,
        inquiryDTO,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        if (response.data) {
          alert("문의가 등록되었습니다! 일주일 이내로 연락드리겠습니다.");
        } else {
          alert("Failed to create inquiry.");
        }
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("문의 생성 중 오류가 발생했습니다.");
      });
  };

  const onClose = () => {
    setCompanyName("");
    setName("");
    setTel("");
    setEmail("");
    handleClose();
  };

  const handleTelKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleTelChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9]/g, "");
    setTel(filteredValue);
  };

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="modal-title">신청 문의</h2>
        <form onSubmit={onSave}>
          <div className="form-group">
            <label htmlFor="companyName">회사명</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-control"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">연락처</label>
            <input
              type="text"
              id="tel"
              name="tel"
              className="form-control"
              value={tel}
              onKeyPress={handleTelKeyPress}
              onChange={handleTelChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">내용</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={content}
              style={{ resize: "none" }}
              disabled
              required
            />
          </div>
          <div
            className="counter"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <button
              type="button"
              onClick={decrement}
              className="btn btn-custom btn-lg"
              style={{ marginRight: "10px" }}
            >
              -
            </button>
            <input
              type="text"
              value={count}
              className="form-control"
              readOnly
              style={{ textAlign: "center", width: "50px" }}
            />
            <button
              type="button"
              onClick={increment}
              className="btn btn-custom btn-lg"
              style={{ marginLeft: "10px" }}
            >
              +
            </button>
          </div>
          <button type="submit" className="btn btn-custom btn-lg">
            신청 문의
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestModal;
