import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSend = () => {
    const errors = {};

    if (contact.name === "") {
      errors.name = "Name is required";
    }

    if (contact.email === "") {
      errors.email = "Email is required";
    }

    if (contact.message === "") {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setContact({
        name: "",
        email: "",
        message: "",
      });

      setError({});
    }
  };

  return (
    <div className="contact-main">
      <div className="news">
        <div className="left-contact-main">
          <p className="news-sub-left">NewsLetter</p>
          <p className="news-main">
            Get news about articles and updates in your inbox.
          </p>
        </div>
        <div className="right-contact-main">
          <div>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              placeholder="NAME"
              className="input-box"
            />
            {error.name && <p className="error">*{error.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="EMAIL"
              className="input-box"
            />
            {error.email && <p className="error">*{error.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="message"
              value={contact.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              className="input-box"
            />
            {error.message && <p className="error">*{error.message}</p>}
          </div>
        </div>
      </div>
      <div className="get-touch-send">
        <p className="get-touch">GET IN TOUCH</p>
        <button className="send-button" onClick={onSend}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default Contact;
