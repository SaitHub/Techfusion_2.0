import React from 'react'
import b2b from '../../assets/b2b.png'
import classes from './Events.module.css'
import codec from '../../assets/codec.png'
import coded from '../../assets/coded.png'
import cloudv from '../../assets/cloudv.jpg'
import netq from '../../assets/netq.png'
import Card from '../Card'
import Button from '../Button'
import sponser from '../../assets/ninja.png'
import { useNavigate } from 'react-router-dom'
const Events = () => {
    const navigate=useNavigate()
    const eventsdata=[
        {
            id:0,
            image:codec,
            title:"CodeCrush",
            content:"Codecrush is an online coding contest for individual participants, featuring two tracks: Novice and Expert The contest includes a range of questions varying in difficulty from easy to hard. Codecrush is an excellent opportunity for students to showcase their coding abilities and compete with their peers, pushing their limits and improving their skills.",
        },
        {
            id:1,
            image:coded,
            title:"CodeDuet",
            content:"CodeDuet is a pair coding contest with challenging rounds that test teamwork and coding skills. Participants solve complex problems together under time pressure, improving collaboration abilities.",
        },
        {
            id:2,
            image:cloudv,
            title:"CloudVerse",
            content:"CloudVerse is a one-day event covering AWS services to provide a comprehensive understanding of cloud computing basics and elements. Participants gain valuable insights and practical skills for real-world scenarios, making it an engaging and informative learning experience.",
        },
        {
            id:3,
            image:netq,
            title:"NetVerse",
            content:"NetVerse, a day-long event exploring computer networks. Learn the basics, understand IP addresses, and explore real-world applications. Get hands-on experience and practical skills. It's a fun and easy way to dive into the world of networks!",
        },
        {
            id:4,
            image:b2b,
            title:"Bid 2 Build",
            content:"Bid 2 Build is an IPL-style auction event where cricket skills and attentiveness are judged as participants bid for players to build their team. It requires strategic decision-making and cricket knowledge to build a winning team, making it an exciting opportunity to showcase skills and test decision making abilities.",
        }
    ]
  return (
    <div className={classes.main}>
    <div className={classes.eventContainer}>
        <h1>Events</h1>
        <div className={classes.eventSection}>
            {eventsdata.map((event,index)=>(
                <Card key={event.id} className={classes.eventCard} style={{cursor:"pointer"}} onClick={()=>{navigate(`/event/${event.id}`)}}>
                        <img src={event.image} alt="#" className={classes.eventImage}/>
                    <div className={classes.eventContent}>
                        <h2>{event.title}</h2>
                        <p>{event.content}</p>
                    </div>
                    <div className={classes.read}>
                        <Button text="Read More" color="white" bgcolor="#2B6CB0" width="100px" height="30px" clickListener={()=>{navigate(`/event/${event.id}`)}}/>
                    </div>
                </Card>
            ))}
        </div>
    </div>
    <div className={classes.sponser}>
        <h1>Sponsors</h1>
        <div className={classes.sponserSection}>
            <div className={classes.sponserCard}>
                <img src={sponser} alt="The Sparks Foundation" className={classes.sponserImage}/>
                <h2>Coding Ninjas</h2>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Events