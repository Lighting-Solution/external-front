import React, { useState, useEffect } from "react";
import "../css/AdminLoginModal.css";
import axios from "axios";

const AdminLoginModal = ({ show, handleClose, checkAdmin }) => {
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");

  useEffect(() => {
    if (!show) {
      setAdminId("");
      setAdminPw("");
    }
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminCredentials = {
      id: adminId,
      pw: adminPw,
    };

    axios
      .post(
        "http://localhost:9001/api/v1/lighting_solutions/inquiry/admin",
        adminCredentials,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data) {
          alert("Login successful!");
          checkAdmin(response.data);
        } else {
          alert("Login failed. Please check your credentials.");
        }
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during login.");
      });
  };

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2 className="modal-title">Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="adminId">ID</label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              className="form-control"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="adminPw">PW</label>
            <input
              type="password"
              id="adminPw"
              name="adminPw"
              className="form-control"
              value={adminPw}
              onChange={(e) => setAdminPw(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-custom btn-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;
