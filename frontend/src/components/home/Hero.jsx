import React from 'react'
import classes from './Hero.module.css'
import Navbar from './Navbar'
import Timer from '../Timer'
import Button from '../Button'
import prizes from '../../assets/prize.png'
import {useNavigate} from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate()
  return (
    <div className={classes.heroContainer}>
        <div className={classes.layer}>
            <Navbar/>
            <div className={classes.heroContent}>
                <><h1 className={classes.heroTitle}>TechFusion 2.0</h1>
                <p className={classes.heroText}>Students' Association of Information Technology WCE, Sangli</p></>
                <div className={classes.time}>
                <Timer/>
                </div>
                <img className={classes.prize} src={prizes} alt="#" />
                <div className={classes.registerButton}>
                <Button text="Register Now" color="black" bgcolor="#65CACC" width="160px" height="50px" clickListener={()=>{navigate('/register')}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero