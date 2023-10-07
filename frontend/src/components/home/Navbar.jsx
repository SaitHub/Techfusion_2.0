import React, { useEffect, useState } from "react";
import sait from "../../assets/sait.png";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import about from "../../assets/about.png";
import register from "../../assets/register.png";
import { BiSolidTrophy } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import Tippy from "@tippyjs/react";
import classes from "./Navbar.module.css";
// import * as scroll from 'react-scroll'
const Navbar = () => {
  const [offset,setOffset] =useState(0);
  useEffect(() => {
    window.scrollTo(0,offset,{
      behavior:'smooth'
    })
},[offset])

  return (
    <nav className={classes.navContainer}>
      <div className={classes.logo}>
        <img src={sait} alt="#" />
        <h1>SAIT</h1>
      </div>
      <ul className={classes.navItems}>
        <li>
          <Tippy content="Home" delay="200">
            <NavLink to="/">
              <GoHomeFill size={25} color="black" />
            </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="About us" delay="200">
            <NavLink to="/" onClick={()=>{setOffset(400)}}>
              <img src={about} alt="#" width="25px" height="25px" />
            </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Events" delay="200">
            <NavLink to="/" onClick={()=>{setOffset(800)}}>
              <BiSolidTrophy size={25} color="black" />
            </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Contact us" delay="200">
            <NavLink to="/" onClick={()=>{setOffset(2200)}}>
              <MdContactSupport size={25} color="black" />
            </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Register" delay="200" >
            <NavLink to="/register">
              <img src={register} alt="#" width="25px" height="25px" />
            </NavLink>
          </Tippy>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
