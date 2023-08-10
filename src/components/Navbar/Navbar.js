import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

import { BiSolidShip } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className={classes.logo}>
          <h1><BiSolidShip /></h1> 
          <Link to="/" className={classes.navBtn}>
          <h1> Odyssey</h1>
          </Link>
        </div>

        <div className={classes.nav_btn}>
          <Link to="/projects" className={classes.navBtn}>
            Projects
          </Link>

          <Link to="/about" className={classes.navBtn}>
            About Me
          </Link>

          <Link to="/contacts" className={classes.navBtn}>
            Contact Me
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
