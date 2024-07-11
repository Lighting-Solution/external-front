import React, { useState, useEffect } from "react";
import "../css/InquiryDetail.css";
import axios from "axios";
import { Modal, Box, Button, Typography } from "@mui/material";

const InquiryDetail = ({ open, handleClose, inquiryId }) => {
  const [inquiryData, setInquiryData] = useState({
    id: inquiryId,
    companyName: "",
    name: "",
    tel: "",
    email: "",
    message: "",
    inquiryState: false,
    manager: "",
    category: "",
  });

  useEffect(() => {
    let isMounted = true;

    if (open) {
      fetchInquiryDetail(inquiryId);
    }

    return () => {
      isMounted = false;
    };

    async function fetchInquiryDetail(inquiryId) {
      try {
        const response = await axios.get(
          `http://localhost:9001/api/v1/lighting_solutions/inquiry/detail-inquiry/${inquiryId}`
        );
        if (isMounted) {
          setInquiryData(response.data); // 컴포넌트가 마운트된 상태일 때만 상태 업데이트
        }
      } catch (error) {
        console.error("Error fetching inquiry detail:", error);
      }
    }
  }, [open, inquiryId]);

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
        `http://localhost:9001/api/v1/lighting_solutions/inquiry/update`,
        inquiryData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data) {
          alert("업데이트가 성공적으로 완료되었습니다!");
          handleClose();
        } else {
          alert("업데이트 실패. 다시 시도해주세요.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("업데이트 도중 오류가 발생했습니다.");
      });
  };

  const handleSubmit = () => {
    const send = {
      title: `[신청/상담] 문의 요청 ( 회사명 : ${inquiryData.companyName} )`,
      content: `문의자 : ${inquiryData.name}\n연락처 : ${inquiryData.tel}\n이메일 : ${inquiryData.email}\n문의 내용 : ${inquiryData.message}\n카테고리 : ${inquiryData.category}`,
    };

    axios
      .put(
        `http://localhost:9001/api/v1/lighting_solutions/inquiry/send/${inquiryId}`,
        send,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data) {
          alert("전송에 성공하였습니다.");
        } else {
          alert("전송에 실패하였습니다. 다시 시도해주세요.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during send.");
      });
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
          <div className="form-group">
            <label>카테고리</label>
            <select
              name="category"
              value={inquiryData.category}
              onChange={handleInputChange}
            >
              <option value="public">공통</option>
              <option value="service">서비스사업부</option>
              <option value="solution">솔루션사업부</option>
              <option value="manage">관리사업부</option>
            </select>
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
