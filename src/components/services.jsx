import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p></p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-12">
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "100px",
                      width: "100%",
                      flexWrap: "nowrap",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {(() => {
                      switch (i) {
                        case 0:
                          return (
                            <>
                              <i
                                className={d.icon}
                                style={{
                                  marginRight: "10px",
                                }}
                              ></i>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                              <img
                                src="img/service/chat01.png"
                                className="img-responsive"
                                alt=""
                                style={{ width: "900px" }}
                              />
                            </>
                          );
                        case 1:
                          return (
                            <>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                              <i
                                className={d.icon}
                                style={{ marginLeft: "10px" }}
                              ></i>
                            </>
                          );
                        case 2:
                          return (
                            <>
                              <i
                                className={d.icon}
                                style={{ marginRight: "10px" }}
                              ></i>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                            </>
                          );
                        case 3:
                          return (
                            <>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                              <i
                                className={d.icon}
                                style={{ marginLeft: "10px" }}
                              ></i>
                            </>
                          );
                        case 4:
                          return (
                            <>
                              <i
                                className={d.icon}
                                style={{ marginRight: "10px" }}
                              ></i>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                            </>
                          );
                        case 5:
                          return (
                            <>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                              <i
                                className={d.icon}
                                style={{ marginLeft: "10px" }}
                              ></i>
                            </>
                          );
                        default:
                          return (
                            <>
                              <i
                                className={d.icon}
                                style={{ marginRight: "10px" }}
                              ></i>
                              <div className="service-desc">
                                <h3>{d.name}</h3>
                                <p>{d.text}</p>
                              </div>
                            </>
                          );
                      }
                    })()}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
