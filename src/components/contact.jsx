import React, { useState } from "react";
import "../css/Text-button-css.css";

const initialState = {
  companyName: "",
  name: "",
  email: "",
  tel: "",
  message: "",
};

export const Contact = (props) => {
  const [{ companyName, name, email, tel, message }, setState] =
    useState(initialState);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setState((prevState) => ({ ...prevState }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleAdmin = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    clearState();
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
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="form-control"
                        placeholder="회사명"
                        value={companyName}
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
                        value={name}
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
                        value={tel}
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
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="이메일"
                        value={email}
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
                    value={message}
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
          <button class="text-button" onClick={handleAdmin}>
            ?
          </button>
        </div>
      </div>
    </div>
  );
};
