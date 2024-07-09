import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      {/* 메인 화면 */}
      <Header data={landingPageData.Header} />
      {/* 회사 소개 */}
      <About data={landingPageData.About} />
      {/* 서비스 소개 */}
      <Services data={landingPageData.Services} />
      {/* 신청 */}
      <Gallery data={landingPageData.Gallery} />
      {/* 문의 */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
