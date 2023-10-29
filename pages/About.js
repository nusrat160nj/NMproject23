import React from "react";
import Helloworld from "../assets/helloworld.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Helloworld})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The iPhone was the first mobile phone to use multi-touch technology.
        Since the iPhone's launch, it has gained larger screen sizes, video-recording,waterproofing, and many accessibility features. 
        Up to the iPhone 8 and 8 Plus, iPhones had a single button on the front panel with the Touch ID fingerprint sensor. 
        Since the iPhone X, iPhone models have switched to a nearly bezel-less front screen design with Face ID facial recognition, and app switching activated by gestures.
        Touch ID is still used for the budget iPhone SE series.
        The iPhone is one of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market. 
        The iPhone has generated large profits for Apple, making it one of the world's most valuable publicly traded companies. 
        The first-generation iPhone was described as a "revolution" for the mobile phone industry and subsequent models have also garnered praise.
        The iPhone has been credited with popularizing the smartphone and slate form factor, and with creating a large market for smartphone apps, or "app economy". 
        As of January 2017, Apple's App Store contained more than 2.2 million applications for the iPhone.
        </p>
      </div>
    </div>
  );
}

export default About;