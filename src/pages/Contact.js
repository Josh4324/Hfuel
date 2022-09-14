import React, { useRef, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { NotificationManager } from "react-notifications";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const sendMail = async (evt) => {
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      return NotificationManager.error(
        "Please fill all required fields",
        "Error"
      );
    }
    NotificationManager.info("Sending Message", "Info");
    evt.preventDefault();
    const detail = await axios.post(
      "https://attendanceapp.bakerindustries.io/api/v1/mail",
      {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        receiver: "keepitdeficommunity@gmail.com",
        group: "KeepITDefi Contact Feedback",
      }
    );
    NotificationManager.success("Message sent successfully", "Success");

    console.log(detail);
  };
  return (
    <div>
      <Header />
      <main>
        <section className="contact">
          <div className="contact-text1">We would love to hear from you</div>
          <form onSubmit={sendMail}>
            <div className="formbox">
              <div className="contact-box">
                <div className="contact-text2">What’s your Full Name?</div>
                <div>
                  <input
                    className="contact-input"
                    placeholder="Enter your full name"
                    ref={nameRef}
                    required
                  />
                </div>
              </div>
              <div className="contact-box">
                <div className="contact-text2">How can we contact you ?</div>
                <div>
                  <input
                    className="contact-input"
                    placeholder="Enter your email address"
                    ref={emailRef}
                    required
                  />
                </div>
              </div>
              <div className="contact-box">
                <div className="contact-text2">Write your message</div>
                <div>
                  <textarea
                    className="contact-textarea"
                    ref={messageRef}
                    required
                  ></textarea>
                </div>
              </div>

              <button onClick={sendMail} className="contact-button">
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
