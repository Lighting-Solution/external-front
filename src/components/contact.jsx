import React, { useState } from "react";
import "../css/Text-button.css";
import AdminLoginModal from "./AdminLoginModal";
import axios from "axios";

const initialState = {
  companyName: "",
  name: "",
  email: "",
  tel: "",
  message: "",
};

export const Contact = (props) => {
  const [state, setState] = useState(initialState);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState(initialState);
  };

  const handleAdmin = () => {
    setShowModal(true);
  };

  const checkAdmin = (check) => {
    props.checkAdmin(check);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTelChange = (e) => {
    const { value } = e.target;
    // 숫자가 아닌 문자, 한글, 특수문자 등을 필터링
    const filteredValue = value.replace(/[^0-9]/g, "");
    setState((prevState) => ({ ...prevState, tel: filteredValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { companyName, name, email, tel, message } = state;

    const inquiryDTO = {
      companyName,
      name,
      tel,
      email,
      message,
      manager: "",
      inquiryState: false,
    };

    console.log(inquiryDTO);
    axios
      .post(
        `http://localhost:9001/api/v1/lighting_solutions/inquiry/create`,
        inquiryDTO,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        if (response.data) {
          clearState();
          alert("문의가 등록되었습니다! 일주일 이내로 연락드리겠습니다.");
        } else {
          alert("Failed to create inquiry.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while creating inquiry.");
      });
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>상담을 통해 궁금한 점을 즉시 해결하세요.</p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="form-control"
                        placeholder="회사명"
                        value={state.companyName}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="이름"
                        value={state.name}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="tel"
                        name="tel"
                        className="form-control"
                        placeholder="연락처"
                        value={state.tel}
                        required
                        onChange={handleTelChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="이메일"
                        value={state.email}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="내용"
                    value={state.message}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  문의 요청
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; lighting solution Co. All rights reserved. </p>
          <button className="text-button" onClick={handleAdmin}>
            ?
          </button>
        </div>
      </div>
      <AdminLoginModal
        show={showModal}
        handleClose={handleCloseModal}
        checkAdmin={checkAdmin}
      />
    </div>
  );
};
