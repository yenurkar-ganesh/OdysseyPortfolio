import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import classes from "./About.module.css";
import { about } from "../data";

const About = () => {
  return (
    <>
      <Navbar />

      <div
        className={classes.bgWall}
        style={{
          backgroundImage: `url(/images/thom-holmes-x1Knd2yopZI-unsplash.jpg)`,
        }}
      >
        <div className={classes.text}>
          <h1 className={classes.title} style={{ position: `absolute` }}>
            About Me
          </h1>
          <p
            className={classes.bgText}
          >
            <br /> <br /> "Crafting digital elegance with simplicity and grace."
          </p>
        </div>
      </div>




      <div className={classes.about_container}>
        <h2 style={{ marginBottom: `5vh` }}>Get to know me little better ! </h2>
        {about.map((para, index) => {
          return (
            <>
              <p key={index}> {para} </p>
              <p style={{ color: `aliceblue` }}>.</p>
            </>
          );
        })}
      </div>



      <div style={{ backgroundColor: `#0f172a` }}>
        <Footer />
      </div>

      {}
    </>
  );
};

export default About;
