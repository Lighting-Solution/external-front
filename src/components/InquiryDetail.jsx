import React, { useState, useEffect } from "react";
import "../css/InquiryDetail.css";
import axios from "axios";
import { Modal, Box, Button, Typography } from "@mui/material";
const InquiryDetail = ({ open, handleClose, inquiryId }) => {
  const [inquiryData, setInquiryData] = useState({
    companyName: "",
    name: "",
    tel: "",
    email: "",
    message: "",
    inquiryState: false,
    manager: "",
  });
  useEffect(() => {
    if (open) {
      fetchInquiryDetail(inquiryId);
    }
  }, [open, inquiryId]);

  const fetchInquiryDetail = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:9001/api/v1/lighting_solutions/inquiry/detail-inquiry/${id}`
      );
      setInquiryData(response.data);
    } catch (error) {
      console.error("Error fetching inquiry detail:", error);
    }
  };
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
      .put("http://localhost:9001/api/v1/lighting_solutions/inquiry/update", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data) {
          alert("Successful!");
        } else {
          alert("Failed.");
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
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="inquiry-detail-container" sx={{ ...modalStyle }}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          CUSTOMER INQUIRY DETAIL
        </Typography>
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
          <Button onClick={handleSubmit} variant="contained" color="primary">
            전송
          </Button>
          <Button onClick={handleUpdate} variant="contained" color="warning">
            수정
          </Button>
          <Button onClick={handleList} variant="contained" color="secondary">
            목록으로
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  maxWidth: "800px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default InquiryDetail;
