import React from "react";
import classes from "./Hero.module.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { knowMe, skills } from "../data";

const Hero = () => {
  return (
    <>
      <div className={classes.container} style={{ marginBottom: `5vh` }}>
        <h1 className={classes.heroTitle} style={{ color: `rgb(41, 47, 47)`, marginBottom: `15px` }}>
          {" "}
          <span style={{ color: `#7843e9` }}>Hey </span>, i'm Ganesh Yenurkar
        </h1>
        <p className={classes.heroText} style={{ fontSize: `1.6rem`, color: `rgb(47, 45, 47)` }}>
          Emerging Frontend & Web developer. UX Enthusiast, practicing minimal &
          responsive web designs.
        </p>
        <p className={classes.heroText}
          style={{
            marginBottom: `28px`,
            fontSize: `1.6rem`,
            color: `rgb(47, 47, 47)`,
          }}
        >
          In a few years, I see myself as a seasoned and highly skilled web
          developer, known for creating innovative and impactful digital
          experiences through my dedication to lifelong learning and passion for
          frontend & Web development.
        </p>
        <button className={classes.hero_btn}>
          <Link
            style={{
              textDecoration: `none`,
              fontSize: `1.3rem`,
              justifyContent: `center`,
              color: `aliceblue`,
            }}
            to="/projects"
          >
            PROJECTS
          </Link>
        </button>
      </div>

      <h2 style={{ display: `flex`, justifyContent: `center` }}>ABOUT ME</h2>
      <div className={classes.underline} style={{ marginBottom: `7.5vh` }}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </div>

      <div className={classes.about} style={{ marginBottom: `25vh` }}>
        <div className={classes.left_container}>
          <h2 style={{marginBottom: `2vh`}} >GET TO KNOW ME!</h2>
          {
            knowMe && knowMe.map((knowInfo) => {
              return <section>
                <p>{knowInfo} </p>
                <p style={{color: `aliceblue` }}> .</p>
              </section>
            })
          }
          
          <button className={classes.hero_btn}>
            <Link
              style={{
                textDecoration: `none`,
                fontSize: `1.3rem`,
                justifyContent: `center`,
                color: `aliceblue`,
              }}
              to="/contacts"
            >
              Contact Me
            </Link>{" "}
          </button>
        </div>

        <div className={classes.right_container}>
          <h2 style={{marginBottom: `2vh`}} >
             <GrTechnology /> TECH STACKS
          </h2>
  
          <div style={{ fontSize: `1.2rem`, fontWeight: `400` }}>
            Here are a few technologies I've been working with recently :
          </div>
          <div className={classes.tech_container}>
            {skills &&
              skills.map((skill) => {
                return (
                  <section className={classes.skill_container}>
                    <p
                      className={classes.techs}
                      // style={{ marginBottom: `10px` }}
                    >
                      {skill}
                    </p>
                  </section>
                );
              })}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: `#0f172a` }}>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
