import React from "react";
import "../css/AdminLoginModal-css.css";
const AdminLoginModal = ({ show, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    handleClose();
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
