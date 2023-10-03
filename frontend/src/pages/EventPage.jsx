import React from 'react';
import "./EventPage.css";
import eventsdata from './eventdata';
import {BiLeftArrowAlt} from "react-icons/bi"
import image1 from "../assets/image 1.svg"
import image2 from "../assets/image 2.svg"
import image3 from "../assets/image 3.svg"
import image4 from "../assets/image 4.svg"
import image5 from "../assets/image 5.svg"
import image6 from "../assets/image 6.svg"
import image7 from "../assets/image 7.svg"
import image8 from "../assets/image 8.svg"
import image9 from "../assets/image 9.svg"
import image10 from "../assets/image 10.svg"
import {PiPhoneDisconnectBold} from "react-icons/pi"
import { useParams,useNavigate } from 'react-router-dom';
const EventPage=(props)=>{
    const id=useParams().id;
    const navigate=useNavigate();
    const eventInfo=eventsdata[id]
    const imageArray=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]
    const compeleteRules=eventInfo.rules;
    let a=eventInfo.contact[0];
    let b=eventInfo.contact[1];
    let img1Id=id*2;
    let img2Id=id*2+1;
    return(
        <div id='mainContainer'>
            <div id='headingBar'>
                <div id="backArrow">
                    <BiLeftArrowAlt style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}/>
                </div>
                <div id='heading'>
                    {eventInfo.eventName}
                </div>
            </div>
            <div id="contentsContainer">
                <div id='descriptionContainer' className="gridContainers">
                    <div id="descriptionBox" className='msgBox'>
                        {eventInfo.description}
                    </div>
                </div>
                <div id="floating"className="gridContainers">
                    <img src={imageArray[img1Id]} id='img1'/>
                </div>
                <div id="floating" className="gridContainers">
                    <img id="img2" src={imageArray[img2Id]}></img>
                </div>
                <div id="rulesContainer" className="gridContainers">
                    {
                        (compeleteRules.length==0)? 
                        (
                            <div>
                                <div id="msgHeading">
                                    Contents Covered
                                </div>
                                <div id="rulesMsgBox" className="msgBox">
                                    <ul>
                                        {eventInfo.Contents.map((content, index) => (
                                        <li key={index}>{content}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ):
                        (
                            <div>
                                <div id="msgHeading">
                                    Rules
                                </div>
                                <div id="rulesMsgBox" className="msgBox">
                                    {compeleteRules.map((roundRules, index) => (
                                    <div key={index}>
                                        <h2>Round {index + 1}</h2>
                                        {roundRules.length > 0 ? (
                                            <ul>
                                                {roundRules.map((rule, ruleIndex) => (
                                                    <li key={ruleIndex}>{rule}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div>No rules for this round</div>
                                        )}
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                        )
                    }
                </div>
                <div id='timerlineContainer' className="gridContainers">
                    <h2> Timings </h2>
                    <ul>
                        {eventInfo.timeline.map((event) => (
                            <li>
                            <div id='timings' className="msgBox">
                                <p>{event.name}</p>
                                <p><span>{event.date}</span> <span>{event.time}</span> </p>
                            </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='contactContainer' className="gridContainers">
                    <h2>Contact</h2>
                    <div id="contactMsgBox" className="msgBox">
                        <ul>
                            <li><span><PiPhoneDisconnectBold/>{"     "}{a}</span></li>
                            <li><span><PiPhoneDisconnectBold/>{"     "}{b}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage