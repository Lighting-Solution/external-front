import React from "react";

export const Info = (props) => {
  return (
    <div id="info" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>팀 소개</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <img
              src="img/info.png"
              className="img-responsive"
              alt=""
              style={{ width: "1150px", paddingLeft: "70px" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
