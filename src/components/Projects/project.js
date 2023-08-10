import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { projects } from "../data";
import classes from "./project.module.css";

const project = () => {
  return (
    <>
      <Navbar />

      <div className={classes.bgWall}>
        <h1 className={classes.projectTitle}>PROJECTS</h1>
      </div>

      <div className={classes.project_container}>
        {projects.map((item) => {
          const { id, title, desc, img, techStack, link } = item;
          return (
            <>
              <section
                style={{ marginBottom: `4vh` }}
                className={classes.project_card}
                key={id}
              >
                <div className={classes.projectImg}>
                  <img style={{ marginBottom: `2vh` }} src={img} alt={title} />
                  <section className={classes.techStack}>
                    {techStack &&
                      techStack.map((tech) => {
                        return (
                          <section>
                            <p className={classes.skills}>{tech}</p>
                          </section>
                        );
                      })}
                  </section>
                </div>

                <div className={classes.project_info}>
                  <h2>{title} </h2>
                  <p style={{ marginBottom: `4vh` }}>{desc}</p>

                  <a
                    className={classes.link_btn}
                    target="blank"
                    href={link}
                    style={{
                      textDecoration: `none`,
                      color: "aliceblue",
                      justifyContent: `center`,
                    }}
                  >
                    Live Link
                  </a>
                </div>
              </section>
            </>
          );
        })}
      </div>

      <div style={{ backgroundColor: `#0f172a` }}>
        <Footer />
      </div>
    </>
  );
};

export default project;
