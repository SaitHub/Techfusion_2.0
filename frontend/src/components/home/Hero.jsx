import React from "react";
import classes from "./Hero.module.css";
import Navbar from "./Navbar";
import Timer from "../Timer";
import Button from "../Button";
import prizes from "../../assets/prizeposter.png";
import { useNavigate } from "react-router-dom";
import bgvideo from "../../assets/bgvideo.mp4";
import styles from "../Floating.module.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.heroContainer}>
      <div className={classes.layer}>
        <Navbar />
        <div className={classes.heroContent}>
          <>
            <h1 className={`${classes.heroTitle} ${classes.typingdemo}`}>
              TECHFUSION 2.0
            </h1>
            <p className={classes.heroText}>
              Students' Association of Information Technology WCE, Sangli
            </p>
          </>
          <div className={classes.time}>
            <Timer />
          </div>
          <img
            className={`${classes.prize} ${styles.floating}`}
            src={prizes}
            alt="#"
          />
          <div className={classes.registerButton}>
            <Button
              text="Register Now"
              color="black"
              bgcolor="#65CACC"
              width="160px"
              height="50px"
              clickListener={() => {
                navigate("/register");
              }}
            />
          </div>
        </div>
      </div>
      <video autoPlay loop muted className={classes.backgroundVideo}>
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
