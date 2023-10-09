import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import contactlogo from "../../assets/contactlogo.png";
import styles from "../Floating.module.css";
import classes from "./Contact.module.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Contact = () => {
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
  const [suggestions, setSuggestions] = useState({
    suggestions: "",
    validateSuggestions: false,
    suggestionstouch: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
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
  const handleSuggestionsChange = (e) => {
    setSuggestions({
      suggestions: e.target.value,
      validateSuggestions: e.target.value.trim().length > 0,
      suggestionstouch: true,
    });
  };
  const handleNameBlur = (e) => {
    setName({
      name: name.name.trim(),
      validateName: name.name.trim().length > 0,
      nametouch: true,
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
  const handleSuggestionsBlur = (e) => {
    setSuggestions({
      suggestions: suggestions.suggestions.trim(),
      validateSuggestions: suggestions.suggestions.trim().length > 0,
      suggestionstouch: true,
    });
  };
  useEffect(() => {
    setIsFormValid(
      email.validateEmail &&
        name.validateName &&
        suggestions.validateSuggestions
    );
  }, [email.email, name.name, suggestions.suggestions]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = new FormData();
    contact.append("name", name.name);
    contact.append("email", email.email);
    contact.append("suggestions", suggestions.suggestions);
    try {
      const data = await axios.post(
        "https://techfusion.onrender.com/user/contact",
        contact,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.status === 201) {
        toast.success("Your response has been recorded");
      }
      if (data.status === 400) {
        throw new Error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
    setEmail({ email: "", validateEmail: false, emailtouch: false });
    setName({ name: "", validateName: false, nametouch: false });
    setSuggestions({
      suggestions: "",
      validateSuggestions: false,
      suggestionstouch: false,
    });
  };
  return (
    <div className={classes.contactContainer}>
      <h1>Contact Us</h1>
      <div className={classes.contactSection}>
        <form onSubmit={handleSubmit}>
          <Input
            properties={{
              type: "text",
              name: "name",
              value: name.name,
              placeholder: "Name",
              style: { width: "100%" },
              onChange: handleNameChange,
              onBlur: handleNameBlur,
            }}
          />
          {!name.validateName && name.nametouch && (
            <h5 style={{ color: "red" }}>* Name field is Mandatory</h5>
          )}
          <Input
            properties={{
              type: "email",
              name: "email",
              value: email.email,
              placeholder: "Email",
              style: { width: "100%" },
              onChange: handleEmailChange,
              onBlur: handleEmailBlur,
            }}
          />
          {!email.validateEmail && email.emailtouch && (
            <h5 style={{ color: "red" }}>* Incorrect or empty email</h5>
          )}
          <textarea
            placeholder="Suggestions"
            value={suggestions.suggestions}
            name="suggestions"
            rows={10}
            cols={70}
            onChange={handleSuggestionsChange}
            onBlur={handleSuggestionsBlur}
          />
          {!suggestions.validateSuggestions && suggestions.suggestionstouch && (
            <h5 style={{ color: "red" }}>* Suggestions are Mandatory</h5>
          )}
          <Toaster />
          <button
            disabled={!isFormValid}
            style={{
              color: "white",
              backgroundColor: isFormValid ? "#2B6CB0" : "#4a5663",
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
        <img
          loading="lazy"
          src={contactlogo}
          className={styles.floating}
          alt="#"
        />
      </div>
    </div>
  );
};

export default Contact;
