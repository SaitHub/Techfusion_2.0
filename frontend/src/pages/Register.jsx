import React from "react";
import classes from "./Register.module.css";
import Card from "../components/Card";
import { BiLeftArrowAlt } from "react-icons/bi";
import regImage from "../assets/regImage.png";
import qr from "../assets/qr.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
const Register = () => {
    const navigate = useNavigate();
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
  const [event, setEvent] = useState({
    event: [],
    validateEvent: false,
    eventtouch: false,
  });
  const [screenshot, setScreenshot] = useState({
    screenshot: undefined,
    validateScreenshot: false,
    screenshottouch: false,
  });
  const [tid, setTid] = useState({
    tid: "",
    validateTid: false,
    tidtouch: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  // const submit=useSubmit()
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
    setEvent({
      event: [...event.event,e.target.value],
      validateEvent: event.event.length > 0,
      eventtouch: true,
    });
    };
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
  useEffect(() => {
    setIsFormValid(
      email.validateEmail &&
        name.validateName &&
        phno.validatePhno &&
        clgname.validateClgname
    );
  }, [email.email, name.name, phno.phno, clgname.clgname]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.email, " ", name.name, " ");
    setEmail({ email: "", validateEmail: false, emailtouch: false });
    setName({ name: "", validateName: false, nametouch: false });
    setPhno({ phno: "", validatePhno: false, phnotouch: false });
    setClgname({ clgname: "", validateClgname: false, clgnametouch: false });
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
                <label for="year">Name:</label>
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
                <label for="year">Email:</label>
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
                <label for="year">
                  Phone No. (don't include country code):
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
                <label for="year">College Name:</label>
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
                <label for="year">Year of Study:</label>
                <select
                  id="year"
                  placeholder="year of study"
                >
                  <option value="first">First Year</option>
                  <option value="second">Second Year</option>
                  <option value="third">Third Year</option>
                  <option value="fourth">Fourth Year</option>
                </select>
              </div>
              <div className={classes.ip}>
                <label for="events">Select Events:</label>
                <div class={classes.checkgroup}>
                    <label>
                    <input type="checkbox" name="codeduet"/> CodeDuet (₹150/team)
                    </label>
                    <label>
                    <input type="checkbox" name="codecrush"/> CodeCrush (₹60)
                    </label>
                    <label>
                    <input type="checkbox" name="netverse"/> NetVerse (₹150)
                    </label>
                    <label>
                    <input type="checkbox" name="cloudeverse"/> CloudVerse (₹150)
                    </label>
                    <label>
                    <input type="checkbox" name="Bid 2 Build"/> Bid 2 Build (₹200/team)
                    </label>
                </div>
                {!clgname.validateClgname && clgname.clgnametouch && (
                  <h5 style={{ color: "red" }}>* Select at least one event</h5>
                )}
              </div>
                <div className={classes.ip}>
                <label for="year">Payment Screenshot:</label>
                <Input
                  properties={{
                    type: "file",
                    name: "payment",
                    value: clgname.clgname,
                    placeholder: "Payment Screenshot",
                    style: { width: "100%" },
                    onChange: handleClgnameChange,
                    onBlur: handleClgnameBlur,
                  }}
                />
                {!clgname.validateClgname && clgname.clgnametouch && (
                  <h5 style={{ color: "red" }}>* Screenshot is Mandatory</h5>
                )}
              </div>
              <div className={classes.ip}>
                <label for="year">Transaction Id:</label>
                <Input
                  properties={{
                    type: "text",
                    name: "clgName",
                    value: clgname.clgname,
                    placeholder: "ex- T1234-5678-9012-3456",
                    style: { width: "100%" },
                    onChange: handleClgnameChange,
                    onBlur: handleClgnameBlur,
                  }}
                />
                {!clgname.validateClgname && clgname.clgnametouch && (
                  <h5 style={{ color: "red" }}>* Transaction id is Mandatory</h5>
                )}
              </div>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#2B6CB0",
                  width: "160px",
                  height: "40px",
                  borderRadius: "15px",
                  cursor: isFormValid ? "pointer" : "not-allowed",
                  outline: "none",
                  fontSize: "1.2rem",
                }}
              >
                Submit
              </button>
            </form>
            <div className={classes.right}>
              <img src={regImage} alt="#" />
              <div className={classes.qrSection}>
                <img src={qr} alt="#" />
                <h3>Scan QR code to register</h3>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Register;
