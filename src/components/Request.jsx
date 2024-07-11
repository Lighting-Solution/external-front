import React, { useState } from "react";
import "../css/Request-css.css";
import RequestModal from "./RequestModal";

function Request() {
  const [selectedPlan, setSelectedPlan] = useState({
    name: "공유형무료",
    price: "무료",
    priceInt: 0,
  });

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRequest = () => {
    setShowModal(true);
  };

  const plans = [
    {
      name: "공유형무료",
      price: "무료",
      priceInt: 0,
      description: "1인 1GB 기준/월",
      totalUsers: 9,
      period: "무제한",
    },
    {
      name: "클라우드공유형",
      price: "₩ 4000",
      priceInt: 4000,
      description: "1인 기준/월",
      totalUsers: 0,
      period: "",
    },
    {
      name: "클라우드단독형",
      price: "₩ 5000",
      priceInt: 5000,
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
            className={`plan ${
              selectedPlan.name === plan.name ? "selected" : ""
            }`}
            onClick={() =>
              setSelectedPlan({
                name: plan.name,
                price: plan.price,
                priceInt: plan.priceInt,
              })
            }
          >
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <h2>{plan.price}</h2>
          </div>
        ))}
      </div>
      <div className="summary">
        <h3>Total</h3>
        <p>{selectedPlan.name}</p>
        <button onClick={handleRequest}>신청 문의</button>
      </div>
      <RequestModal
        show={showModal}
        handleClose={handleCloseModal}
        requestData={selectedPlan}
      />
    </div>
  );
}

export default Request;
