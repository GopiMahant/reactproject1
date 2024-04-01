import React from "react";
import service from "./images/service1.jpg";
import service2 from "./images/service2.png";
import service3 from "./images/service3.webp";
import service4 from "./images/service4.webp";
import service5 from "./images/service5.png";
import service6 from "./images/service6.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: service,
      title: "Free 5 Years of Servicings",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: service2,
      title: "Car Insured",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: service3,
      title: "Towing",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      
    },
    {
      image: service4,
      title: "Car Delivery",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: service5,
      title: "Stay Connected over years",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: service6,
      title: "Accessories",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       
        <h1 className="primary-heading">Services</h1>
        <p className="primary-text">
          Toyota embraces the philosophy of kaizen, which emphasizes continuous improvement in all aspects of business operations. Through initiatives such as the Toyota Production System (TPS).
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
