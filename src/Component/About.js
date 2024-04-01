import React from "react";
import AboutBackground from "./images/triangle.jpg";
import AboutBackgroundImage from "./images/group2.png";
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading" style={{ fontSize: "50px", color: "red" }}>About</p>
        <h1 className="primary-heading">
          Quality , Reliability, Innovation and Technology
        </h1>
        <p className="primary-text">
          Toyota prioritizes innovation and technological advancement in its vehicles. From hybrid technology to autonomous driving features, the company aims to stay at the forefront of automotive innovation, offering cutting-edge solutions that enhance the driving experience and address environmental concerns.
        </p>
       
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button" >
            <FollowTheSignsIcon /> <a href="#" style={{textDecoration:"none", color:'red'}}>See Journey</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
