import React from "react";
import Card from "../Card";
import Tippy from "@tippyjs/react";
import { NavLink } from "react-router-dom";
import { VscLaw } from "react-icons/vsc";
import { IoMdContact } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import rule from "../../assets/Rulebook.pdf";
import sait from "../../assets/sait.png";
import classes from "./Foot.module.css";
const Foot = () => {
  return (
    <Card className={classes.footerContainer}>
      <div className={classes.upper}>
        <div className={classes.left}>
          <div className={classes.spanlogo}>
            <NavLink
              target="_blank"
              to="https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8457387,74.5988826,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575!16zL20vMDVoZG5q?entry=ttu"
            >
              <IoLocationSharp size={25} color="black" />
            </NavLink>
            <p>Walchand college of engineering, Sangli</p>
          </div>
          <div className={classes.spanlogo}>
            <NavLink to={{ pathname: rule }} target="_blank">
              <VscLaw size={25} color="black" />
            </NavLink>
            <p>Techfusion 2.0 Rulebook</p>
          </div>
          <div className={classes.spanlogo}>
            <NavLink to="/">
              <IoMdContact size={25} color="black" />
            </NavLink>
            <p>Students' Asssociation of Information Technology</p>
          </div>
        </div>
        <div className={classes.middle}>
          <h3>Stay Connected</h3>
          <div className={classes.profiles}>
            <Tippy placement="bottom" content="Instagram" delay="200">
              <NavLink to="https://www.instagram.com/wce_sait/" target="_blank">
                <BsInstagram size={25} color="black" />
              </NavLink>
            </Tippy>
            <Tippy placement="bottom" content="WhatsApp" delay="200">
              <NavLink
                target="_blank"
                to="https://api.whatsapp.com/send?phone=919168171111&text=Hello,%20I%20have%20a%20doubt%20regarding%20techfusion%202.0"
              >
                <BsWhatsapp size={25} color="black" />
              </NavLink>
            </Tippy>
            <Tippy placement="bottom" content="LinkedIn" delay="200">
              <NavLink
                target="_blank"
                to="https://www.linkedin.com/company/wcesait/mycompany/"
              >
                <FaLinkedinIn size={25} color="black" />
              </NavLink>
            </Tippy>
            <Tippy placement="bottom" content="Mail" delay="200">
              <NavLink
                target="_blank"
                to="mailto:wce.sait@walchandsangli.ac.in"
              >
                <BiLogoGmail size={25} color="black" />
              </NavLink>
            </Tippy>
          </div>
        </div>
        <div className={classes.right}>
          <Card className={classes.footerlogo}>
            <img loading="lazy" src={sait} alt="#" />
          </Card>
        </div>
      </div>
      <footer>
        <h4>
          Copyright &#169; {new Date().getFullYear()} | All rights are reserved
          to SAIT
        </h4>
      </footer>
    </Card>
  );
};

export default Foot;
