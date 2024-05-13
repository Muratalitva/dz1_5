import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

const Header = () => {
  return (
    <div>
      <nav className={classes.header}>
        <ul className={classes.nav}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/courses">COURSES</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/team">TEAM</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <img className={classes.vector} src="https://i.pinimg.com/564x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" alt="" />
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};


export default Header;
