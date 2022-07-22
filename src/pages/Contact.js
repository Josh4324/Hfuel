import React from "react";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <main>
        <section className="contact">
          <div className="contact-text1">We would love to hear from you</div>

          <div className="formbox">
            <div className="contact-box">
              <div className="contact-text2">What’s your Full Name?</div>
              <div>
                <input
                  className="contact-input"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="contact-box">
              <div className="contact-text2">How can we contact you ?</div>
              <div>
                <input
                  className="contact-input"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="contact-box">
              <div className="contact-text2">Write your message</div>
              <div>
                <textarea className="contact-textarea"></textarea>
              </div>
            </div>

            <button className="contact-button">Send message</button>
          </div>
        </section>
      </main>
    </div>
  );
}
