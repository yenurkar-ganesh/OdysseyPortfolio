import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import classes from "./contact.module.css";
import emailjs from "@emailjs/browser";

const Contacts = () => {
 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3r2gq6h",
        "template_jjn7asq",
        form.current,
        "ofRRlGw1pSxD3-Zf0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            document.getElementById(
              "msg-text"
            ).innerHTML = `Message Sent successfully `;
          }, 100);
        },
        (error) => {
          console.log(error.text);
          document.getElementById(
            "msg-text"
          ).innerHTML = `Something went Wrong ` ;
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Navbar />


      <div className={classes.form}>

        <div
          className={classes.bgImg}
          style={{
            backgroundImage: `url(/images/markus-winkler-q3QPw37J6Xs-unsplash.jpg)`,
          }}
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className={classes.about_container}
        >
          <h2>Contact Form</h2>
          <input
            required
            type="text"
            name="user_name"
            placeholder="Enter full name"
          />

          <input
            required
            type="email"
            name="user_email"
            placeholder="Enter your email "
          />

          <textarea
            name="message"
            required
            placeholder="message"
            rows="8"
          ></textarea>
          <br />

          <button className={classes.submitBtn} value="send" type="submit">
            Submit{" "}
          </button>

          <p
          className={classes.successText}
            id="msg-text"
          ></p>
        </form>
      </div>

      <div style={{ backgroundColor: `#0f172a` }}>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
