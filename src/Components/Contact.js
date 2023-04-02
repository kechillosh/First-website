import React from "react";
import carPic from "../assets/desktop-wallpaper-computer-backgrounds-car-rental-187-71-kb-backgrounds.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div
      className="backgroundimg"
      style={{ backgroundImage: `url(${carPic})` }}
    >
      <form id="contact-form" method="POST">
        <label htmlFor="name">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Enter email..." type="email" />
        <label htmlFor="message">Message</label>
        <textarea
          rows="6"
          placeholder="Enter message..."
          name="message"
          required
        ></textarea>
        <button type="submit"> Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
