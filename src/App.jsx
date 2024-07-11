import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Info } from "./components/Info";
import { Navigation } from "./components/navigation";
import Request from "./components/Request";
import { Admin } from "./components/Admin";
import RequestModal from "./components/RequestModal";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Services } from "./components/services";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const checkAdmin = (check) => {
    check ? setAdmin(true) : setAdmin(false);
  };

  return (
    <>
      <Navigation logout={checkAdmin} />
      {admin ? (
        <div style={{ paddingTop: "100px" }}>
          {<Admin data={landingPageData.Admin} />}
        </div>
      ) : (
        <div>
          {/* 메인 이미지 소개 */}
          <Header data={landingPageData.Header} />
          {/* 회사 소개 */}
          <About data={landingPageData.About} />
          {/* 팀 소개 */}
          <Info data={landingPageData.Info} />
          {/* 서비스 소개 */}
          <Services data={landingPageData.Services} />
          {/* 신청 */}
          <Request data={landingPageData.Request} />
          {/* 문의 */}
          <Contact data={landingPageData.Contact} checkAdmin={checkAdmin} />
        </div>
      )}
    </>
  );
};

export default App;
