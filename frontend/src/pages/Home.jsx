import React, { useEffect, useState } from 'react'
import classes from './Home.module.css'
import Hero from '../components/home/Hero'
import 'tippy.js/dist/tippy.css'
import About from '../components/home/About'
import Events from '../components/home/Events'
import Contact from '../components/home/Contact'
import Foot from '../components/home/Foot'
import {FaArrowUp} from 'react-icons/fa'
import Card from '../components/Card'
import style from '../components/Floating.module.css'
const Home = () => {
  const [visible,setVisible] = useState(false)
  const listenscroll=()=>{
    let scroll=document.documentElement.scrollTop||document.body.scrollTop;
    if(scroll>500){
      setVisible(true)
    }else{
      setVisible(false)
    }
  }
  const topScrollHandler=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  useEffect(()=>{
    window.addEventListener('scroll',listenscroll)
    return ()=>{
      window.removeEventListener('scroll',listenscroll)
    }
  },[])
  return (
    <div className={classes.homeContainer}>
        <Hero/>
        <About/>
        <Events/>
        <Contact/>
        {visible&&<Card className={`${classes.uparrow} ${style.floating}`} onClick={topScrollHandler}>
          <FaArrowUp size={30} color="white"/>
        </Card>}
        <Foot/>
    </div>
  )
}

export default Home