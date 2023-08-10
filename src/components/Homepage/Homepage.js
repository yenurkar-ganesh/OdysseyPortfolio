import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import classes from "./Homepage.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";

const Homepage = () => {
  const [loader, setLoader] = useState(false);

  return (
    <>
      <div className="container">
        <Navbar />
        <div
          className={classes.bgWall}
          style={{
            backgroundImage: `url(images/aaina-sharma-nqj3ncOPS0g-unsplash.jpg)`,
          }}
        >
          <Hero />
        </div>
      </div>

      <div id="bar" className="fixed-nav">
        <div className="links">
          <a
            className="fixed-link"
            target="blank"
            href="https://in.linkedin.com/in/ganesh-yenurkar-374915199"
            alt="Ganesh's Linkedin"
          >
            {" "}
            <BsLinkedin className={classes.icon}  />{" "}
          </a>

          <a
            className="fixed-link"
            target="blank"
            href="https://www.instagram.com/ganesh.yenurkar_/"
            alt="Ganesh's Instagram"
          >
            {" "}
            <CiInstagram className={classes.icon} />{" "}
          </a>

          <a
            className="fixed-link"
            target="blank"
            href="https://github.com/yenurkar-ganesh?tab=repositories"
            alt="Ganesh's Github"
          >
            {" "}
            <BsGithub className={classes.icon} />{" "}
          </a>
        </div>
      </div>

      {loader && (
        <div className="loader">
          <div className="spinner"></div>
          <h1 className="loader-text">
            `Sit back, We Chasing clouds and collecting weather insights...`
          </h1>
        </div>
      )}
    </>
  );
};

export default Homepage;
