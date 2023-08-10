import React from "react";
import classes from "./Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div
      className={classes.footer_container}
      style={{ backgroundColor: `#0f172a`, color: `aliceblue` }}
    >
      <div className={classes.Sub_footer_container}>
        <div className={classes.right_footer}>
          <h2 style={{ marginBottom: `18px` }}>GANESH YENURKAR</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>

        <div className={classes.left_footer}>
          <h2 style={{ marginBottom: `18px` }}>SOCIAL</h2>
          <div className={classes.links}>
            <a
              target="blank"
              href="https://in.linkedin.com/in/ganesh-yenurkar-374915199"
              alt="Ganesh Yenurkar Linkedin"
            >
              {" "}
              <BsLinkedin
                style={{ color: "aliceblue", fontSize: `22px` }}
              />{" "}
            </a>

            <a
              target="blank"
              href="https://github.com/yenurkar-ganesh?tab=repositories"
              alt="Ganesh's Github"
            >
              {" "}
              <BsGithub style={{ color: "aliceblue", fontSize: `22px` }} />{" "}
            </a>

            <a
              target="blank"
              href="https://www.instagram.com/ganesh.yenurkar_/"
              alt="Ganesh's Instagram"
            >
              {" "}
              <CiInstagram
                style={{ color: "aliceblue", fontSize: `28px` }}
              />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className={classes.main_footer}>
        <p>© Copyright 2023. Made by Ganesh Yenurkar</p>
      </div>
    </div>
  );
};

export default Footer;
