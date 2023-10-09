import React from "react";
import classes from "./Hero.module.css";
import Navbar from "./Navbar";
import Timer from "../Timer";
import Button from "../Button";
import prizes from "../../assets/prizeposter.png";
import winners from "../../assets/winners.png";
import { useNavigate } from "react-router-dom";
import bgvideo from "../../assets/bgvideo.mp4";

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

          <div className={classes.heroChild}>
            <div className={classes.time}>
              <Timer />
            </div>
            <img
              loading="lazy"
              className={`${classes.prize} ${classes.floating}`}
              src={prizes}
              alt="#"
            />
            <img
              loading="lazy"
              className={`${classes.winners} ${classes.floating}`}
              src={winners}
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
        <video preload autoPlay loop muted className={classes.backgroundVideo}>
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
