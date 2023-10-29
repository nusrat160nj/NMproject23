import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/iplanet.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> iWorld </h1>
        <p> HELLO TO THE DESTINEY </p>
        <Link to="/iplanet">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;