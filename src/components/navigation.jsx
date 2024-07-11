import React from "react";

export const Navigation = (props) => {
  const logout = () => {
    props.logout(false);
  };

  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      onClick={logout}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Lighting Solution
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}

            <li>
              <a href="#about" className="page-scroll">
                회사 소개
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                서비스 소개
              </a>
            </li>
            <li>
              <a href="#request" className="page-scroll">
                신청
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                문의
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
