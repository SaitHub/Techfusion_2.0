import React from "react";
import classes from "./About.module.css";
import aboutus from "../../assets/aboutus.png";
import styles from '../Floating.module.css'
const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <h2>About</h2>
      <div className={classes.aboutSection}>
        <div>
        <p>
        Welcome to the exhilarating Techfusion 2.0! 🚀</p>
        <p>
        Techfusion 2.0 is not just a megaevent; it's a mind-blowing celebration of technology, innovation, and boundless creativity. Brace yourselves because, at SAIT, we live for TECHFUSION, and this time, we're back with an electrifying surge of energy that'll leave you breathless!</p>
        <p>
        Our theme this year? Nothing less than the cosmos itself! 🌌 We're honoring our nation's incredible achievements in space exploration, and we're doing it with a bang! Prepare for an intergalactic adventure as we unveil 5 jaw-dropping subevents, giving each and every student a stellar platform to showcase their unrivaled skills and talents.</p>
        <p>
        Buckle up and get ready to journey beyond the stars, because Techfusion 2.0 is about to launch you into a world where the sky is not the limit—it's just the beginning! 🌟 Join us as we shoot for the moon and beyond! 🚀🌕✨
        </p>
          </div>
        <img className={styles.floating} src={aboutus} alt="#" />
      </div>
    </div>
  );
};

export default About;
