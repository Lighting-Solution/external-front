import React, { useState } from "react";
import "../css/Request-css.css";

function Request() {
  const [userCount, setUserCount] = useState(9);
  const [selectedPlan, setSelectedPlan] = useState("공유형무료");

  const plans = [
    {
      name: "공유형무료",
      price: "무료",
      description: "1인 1GB 기준/월",
      totalUsers: 9,
      period: "무제한",
    },
    {
      name: "클라우드공유형",
      price: "₩ 4,000",
      description: "1인 기준/월",
      totalUsers: 0,
      period: "",
    },
    {
      name: "클라우드단독형",
      price: "₩ 5,000",
      description: "1인 기준/월",
      totalUsers: 0,
      period: "",
    },
  ];

  return (
    <div id="request" className="app-container text-center">
      <div className="container">
        <div className="section-title">
          <h2>신청</h2>
        </div>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan ${selectedPlan === plan.name ? "selected" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <h2>{plan.price}</h2>
          </div>
        ))}
      </div>
      <div className="summary">
        <h3>Total</h3>
        <p>{selectedPlan}</p>
        <button>신청 문의</button>
      </div>
    </div>
  );
}

export default Request;
