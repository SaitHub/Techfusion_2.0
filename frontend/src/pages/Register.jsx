import React from "react";
import classes from "./Register.module.css";
import Card from "../components/Card";
import { BiLeftArrowAlt } from "react-icons/bi";
import regImage from "../assets/regImage.png";
import qr from "../assets/qr.jpeg";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import Input from "../components/Input";
import { useRef } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState({
    email: "",
    validateEmail: false,
    emailtouch: false,
  });
  const [name, setName] = useState({
    name: "",
    validateName: false,
    nametouch: false,
  });
  const [phno, setPhno] = useState({
    phno: "",
    validatePhno: false,
    phnotouch: false,
  });
    const [clgname, setClgname] = useState({
    clgname: "",
    validateClgname: false,
    clgnametouch: false,
    });
    const [year, setYear] = useState("First Year");
  const [event, setEvent] = useState({
    event: [],
    validateEvent: false,
    eventtouch: false,
  });
  const [screenshot, setScreenshot] = useState({
    screenshot: null,
    validateScreenshot: false,
    screenshottouch: false,
  });
  const [tid, setTid] = useState({
    tid: "",
    validateTid: false,
    tidtouch: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const codeDuetRef = useRef(null);
  const codeCrushRef = useRef(null);
  const netVerseRef = useRef(null);
  const cloudVerseRef = useRef(null);
  const bidToBuildRef = useRef(null);
  const fileRef=useRef(null)

  const handleEmailChange = (e) => {
    setEmail({
      email: e.target.value,
      validateEmail:
        e.target.value.trim().length > 0 && e.target.value.trim().includes("@"),
      emailtouch: true,
    });
  };
  const handleNameChange = (e) => {
    setName({
      name: e.target.value,
      validateName: e.target.value.trim().length > 0,
      nametouch: true,
    });
  };
  const handlePhnoChange = (e) => {
    setPhno({
      phno: e.target.value,
      validatePhno:
        e.target.value.trim().length > 0 &&
        e.target.value.trim().length === 10 &&
        e.target.value.trim().match(/^[0-9]+$/) !== null,
      phnotouch: true,
    });
  };
  const handleClgnameChange = (e) => {
    setClgname({
      clgname: e.target.value,
      validateClgname: e.target.value.trim().length > 0,
      clgnametouch: true,
    });
  };
    const handleEventChange = (e) => {
      const eventName = e.target.name;
      if (e.target.checked) {
        setEvent({event:[...event.event, eventName], validateEvent: true, eventtouch: true});
      } else {
        setEvent({event:event.event.filter((event) => event !== eventName), validateEvent: false, eventtouch: false});
      }
  }
  const handleNameBlur = (e) => {
    setName({
      name: name.name.trim(),
      validateName: name.name.trim().length > 0,
      nametouch: true,
    });
  };
  const handlePhnoBlur = (e) => {
    setPhno({
      phno: phno.phno.trim(),
      validatePhno:
        phno.phno.trim().length > 0 &&
        phno.phno.trim().length === 10 &&
        e.target.value.trim().match(/^[0-9]+$/) !== null,
      phnotouch: true,
    });
  };
  const handleClgnameBlur = (e) => {
    setClgname({
      clgname: clgname.clgname.trim(),
      validateClgname: clgname.clgname.trim().length > 0,
      clgnametouch: true,
    });
  };
  const handleEmailBlur = (e) => {
    setEmail({
      email: email.email.trim(),
      validateEmail:
        email.email.trim().length > 0 && email.email.trim().includes("@"),
      emailtouch: true,
    });
  };
  const handleEventBlur = (e) => {
    setEvent({
      event: event.event,
      validateEvent: event.event.length > 0,
      eventtouch: true,
    });
  };

  useEffect(() => {
    setIsFormValid(
      email.validateEmail &&
        name.validateName &&
        phno.validatePhno &&
        clgname.validateClgname&&event.validateEvent&&screenshot.validateScreenshot&&tid.validateTid
    );
  }, [email.email, name.name, phno.phno, clgname.clgname, event.event,screenshot.screenshot,tid.tid]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email.email, " ", name.name, " ", phno.phno, " ", clgname.clgname, " ",year," ", event.event," ",screenshot.screenshot," ",tid.tid);
    setSubmitting(true);
    const userRegistrationData=new FormData();
    userRegistrationData.append("Name",name.name);
    userRegistrationData.append("Email",email.email);
    userRegistrationData.append("Phone_No",phno.phno);
    userRegistrationData.append("College_Name",clgname.clgname);
    userRegistrationData.append("Year_of_Study",year);
    userRegistrationData.append("Events",event.event);
    userRegistrationData.append("Transaction_id",tid.tid);
    const paymentScreenshot = new FormData();
    paymentScreenshot.append("file", screenshot.screenshot);
    paymentScreenshot.append("upload_preset", "techfusion_payment"); // Specify your upload preset name here
    paymentScreenshot.append("cloud_name", "du3cgjere");

    try {
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/du3cgjere/auto/upload", // Use "auto" as the upload type for automatic format selection
            paymentScreenshot,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        userRegistrationData.append("Payment_Screenshot",response.data.url);

    } catch (error) {
        toast.error("Error occurred while uploading the payment screenshot");
    }
    // console.log(userRegistrationData.forEach((value,key)=>{console.log(key,value)}));
    try{
      const data=await axios.post("https://techfusion.onrender.com/user/register",userRegistrationData,{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
      });
      if(data.status === 201){
        toast.success("Successfully Registered!");
      }
      if(!data.status===200){
        throw new Error("Error in registering user");
      }

    }
    catch(err){
      toast.error(err.response.data.msg);
      // console.log(err)
    }
    setEmail({ email: "", validateEmail: false, emailtouch: false });
    setName({ name: "", validateName: false, nametouch: false });
    setPhno({ phno: "", validatePhno: false, phnotouch: false });
    setClgname({ clgname: "", validateClgname: false, clgnametouch: false });
    setYear("First Year");
    setEvent({ event: [], validateEvent: false, eventtouch: false });
    setScreenshot({ screenshot: null, validateScreenshot: false, screenshottouch: false });
    setTid({ tid: "", validateTid: false, tidtouch: false });

    codeDuetRef.current.checked = false;
    codeCrushRef.current.checked = false;
    netVerseRef.current.checked = false;
    cloudVerseRef.current.checked = false;
    bidToBuildRef.current.checked = false;
    fileRef.current.value=null
    setSubmitting(false);
  };
  
  return (
    <>
      <div id="backArrow">
        <BiLeftArrowAlt
          size={40}
          color="white"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className={classes.registerContainer}>
        <Card className={classes.registerCard}>
          <h2>Registration</h2>
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
              <div className={classes.ip}>
                <label htmlFor="name">Name:</label>
                <Input
                  properties={{
                    type: "text",
                    name: "name",
                    value: name.name,
                    placeholder: "ex- John Doe",
                    style: { width: "100%" },
                    onChange: handleNameChange,
                    onBlur: handleNameBlur,
                  }}
                />
                {!name.validateName && name.nametouch && (
                  <h5 style={{ color: "red" }}>* Name field is Mandatory</h5>
                )}
              </div>
              <div className={classes.ip}>
                <label htmlFor="email">Email:</label>
                <Input
                  properties={{
                    type: "email",
                    name: "email",
                    value: email.email,
                    placeholder: "ex- xyz@gmail.com",
                    style: { width: "100%" },
                    onChange: handleEmailChange,
                    onBlur: handleEmailBlur,
                  }}
                />
                {!email.validateEmail && email.emailtouch && (
                  <h5 style={{ color: "red" }}>* Incorrect or empty email</h5>
                )}
              </div>
              <div className={classes.ip}>
                <label htmlFor="phone">
                  WhatsApp No. (don't include country code):
                </label>
                <Input
                  properties={{
                    type: "text",
                    name: "phone",
                    value: phno.phno,
                    placeholder: "ex- 9999999999",
                    style: { width: "100%" },
                    onChange: handlePhnoChange,
                    onBlur: handlePhnoBlur,
                  }}
                />
                {!phno.validatePhno && phno.phnotouch && (
                  <h5 style={{ color: "red" }}>
                    * Incorrect or empty Phone no.
                  </h5>
                )}
              </div>
              <div className={classes.ip}>
                <label htmlFor="clgName">College Name:</label>
                <Input
                  properties={{
                    type: "text",
                    name: "clgName",
                    value: clgname.clgname,
                    placeholder: "College Name",
                    style: { width: "100%" },
                    onChange: handleClgnameChange,
                    onBlur: handleClgnameBlur,
                  }}
                />
                {!clgname.validateClgname && clgname.clgnametouch && (
                  <h5 style={{ color: "red" }}>* College Name is Mandatory</h5>
                )}
              </div>
              <div className={classes.ip}>
                <label htmlFor="year">Year of Study:</label>
                <select
                  id="year"
                  placeholder="year of study"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
              </div>
              <div className={classes.ip}>
                <label htmlFor="events">Select Events:</label>
                <div className={classes.checkgroup}>
                    <label>
                    <input type="checkbox" name="CodeDuet" ref={codeDuetRef} onChange={(e)=>{handleEventChange(e)}} onBlur={(e)=>{handleEventBlur(e)}}/> CodeDuet (₹150/team)
                    </label>
                    <label>
                    <input type="checkbox" name="CodeCrush" ref={codeCrushRef} onChange={(e)=>{handleEventChange(e)}} onBlur={(e)=>{handleEventBlur(e)}}/> CodeCrush (₹60)
                    </label>
                    <label>
                    <input type="checkbox" name="NetVerse" ref={netVerseRef} onChange={(e)=>{handleEventChange(e)}} onBlur={(e)=>{handleEventBlur(e)}}/> NetVerse (₹150)
                    </label>
                    <label>
                    <input type="checkbox" name="CloudVerse" ref={cloudVerseRef} onChange={(e)=>{handleEventChange(e)}} onBlur={(e)=>{handleEventBlur(e)}}/> CloudVerse (₹150)
                    </label>
                    <label>
                    <input type="checkbox" name="Bid 2 Build" ref={bidToBuildRef} onChange={(e)=>{handleEventChange(e)}} onBlur={(e)=>{handleEventBlur(e)}}/> Bid 2 Build (₹200/team)
                    </label>
                </div>
                {!event.validateEvent && event.eventtouch && (
                  <h5 style={{ color: "red" }}>* Select at least one event</h5>
                )}
              </div>
                <div className={classes.ip}>
                <label htmlFor="payment">Payment Screenshot:</label>
                <Input
                  properties={{
                    type: "file",
                    name: "payment",
                    ref:fileRef,
                    placeholder: "Payment Screenshot",
                    style: { width: "100%" },
                    onChange: (e)=>{setScreenshot({screenshot:e.target.files[0],validateScreenshot:e.target.files[0] !== null,screenshottouch:true})},
                    onBlur: (e)=>{setScreenshot({screenshot:screenshot.screenshot,validateScreenshot:screenshot.screenshot !== null,screenshottouch:true})},
                  }}
                />
                {!screenshot.validateScreenshot&&screenshot.screenshottouch && (
                  <h5 style={{ color: "red" }}>* Screenshot is Mandatory</h5>
                )}
              </div>
              <div className={classes.ip}>
                <label htmlFor="tid">Transaction Id:</label>
                <Input
                  properties={{
                    type: "text",
                    name: "tid",
                    value: tid.tid,
                    placeholder: "ex- T1234-5678-9012-3456",
                    style: { width: "100%" },
                    onChange: (e)=>{setTid({tid:e.target.value,validateTid:e.target.value.trim().length > 0,tidtouch:true})},
                    onBlur: (e)=>{setTid({tid:tid.tid.trim(),validateTid:tid.tid.trim().length > 0,tidtouch:true})},
                  }}
                />
                {!tid.validateTid && tid.tidtouch && (
                  <h5 style={{ color: "red" }}>* Transaction id is Mandatory</h5>
                )}
              </div>
              <Toaster/>
              <button 
                disabled={!isFormValid}
                style={{
                  color: "white",
                  backgroundColor: (isFormValid)?"#2B6CB0":"#4a5663",
                  width: "160px",
                  height: "40px",
                  borderRadius: "15px",
                  cursor: isFormValid ? "pointer" : "not-allowed",
                  outline: "none",
                  fontSize: "1.2rem",
                  marginTop: "20px",
                }}
              >
                {(submitting)?"Submitting...":"Submit"}
              </button>
            </form>
            <div className={classes.right}>
              <img src={regImage} alt="#" />
              <div className={classes.qrSection}>
                <img src={qr} alt="#" />
                <h3>Scan QR code for Payment</h3>
                <h4 style={{color:"white",marginTop:"1.2rem",fontSize:"1.123rem"}}>*Note: If you are participating in both events NetVerse and CloudVerse, you only need to pay a combined fee of ₹200.</h4>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Register;
