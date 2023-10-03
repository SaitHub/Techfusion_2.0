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
          Students’ Association of Information Technology (SAIT), established in
          the year 2003, is a club formed by the students of the IT Department
          of Walchand College of Engineering, Sangli. This organization is a
          nonprofit public benefit organization and is not organized for the
          private gain of any person. Our community is passionate about
          technology and actively engages in outreach and social initiatives.
          SAIT serves as a valuable platform for learning, skill development,
          and networking, fostering a close-knit community of like-minded IT
          enthusiasts. SAIT conducts weekly club services, 2 mega events named
          Technobuzz and Techfusion along with a General Interest Meet every
          year. SAIT conducts technical sessions like AWS workshop, Networking
          Workshop, Hardware Workshop, IoT Workshop, coding competitions, Club
          services on various technologies and non-technical sessions on Tech
          Talks and Podium, hence improving both the technical and non-technical
          aspects of the students. Development in the communication skills of
          the students and the club members is also focused upon. 
        </p>
        <p>SAIT arranges
          departmental tours, alumni meet, guidance sessions for juniors and
          various events on the significant days of the year</p></div>
        <img className={styles.floating} src={aboutus} alt="#" />
      </div>
    </div>
  );
};

export default About;
