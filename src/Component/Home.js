import React from "react";
import BannerBackground from "./images/car1.png"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Right place for your Dream car!
          </h1>
          <p className="primary-text">
            Toyota is committed to providing high-quality products and services that meet or exceed customer expectations. Customer satisfaction is a primary focus, driving the company to continually improve its vehicles' safety, reliability, and performance.
          </p>

          <button className="secondary-button">
            Visit now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
