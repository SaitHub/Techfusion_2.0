import React from "react";
import classes from "./About.module.css";
import aboutus from "../../assets/aboutus.png";
import styles from "../Floating.module.css";
const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <h2>About</h2>
      <div className={classes.aboutSection}>
        <div>
          <p>Welcome to Techfusion 2.0! 🚀</p>
          <p>
            Techfusion 2.0 is a celebration of technology, innovation, and
            creativity like never before. Hosted by SAIT, we are thrilled to
            bring you an electrifying event that will leave you amazed!
          </p>
          <p>
            This year's theme is the cosmos, honoring our nation's achievements
            in space exploration. Get ready for an intergalactic adventure with
            5 incredible subevents, providing a platform for students to
            showcase their talents.
          </p>
          <p>
            Join us on this stellar journey where the sky is not the limit; it's
            just the beginning! Shoot for the moon and beyond with Techfusion
            2.0! 🚀🌕✨
          </p>
        </div>
        <img loading="lazy" className={styles.floating} src={aboutus} alt="#" />
      </div>
    </div>
  );
};

export default About;
