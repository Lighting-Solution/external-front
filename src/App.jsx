import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Info } from "./components/Info";
import Request from "./components/Request";
import { Admin } from "./components/Admin";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [status, setStatus] = useState("main");
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const renderContent = () => {
    switch (status) {
      case "main":
        return (
          <>
            {/* 메인 화면 */}
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
            <Contact data={landingPageData.Contact} />
          </>
        );
      case "admin":
        return (
          <>
            <Admin data={landingPageData.Admin} />
          </>
        );
    }
  };

  return (
    <div>
      <Navigation />
      {renderContent()}
    </div>
  );
};

export default App;
