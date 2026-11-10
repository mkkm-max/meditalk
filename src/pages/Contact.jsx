import React, { useState } from 'react';
import contactImage from '../assets/contact.svg';
import '../styles/Contact.css';

function Contact() {
  const [state, setState] = useState({ fname: '', email: '', message: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state));
    alert('Message Sent Successfully');
    setState({ fname: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <p className="subtitle">Have a question? Send us a message.</p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="fname"
            placeholder="Enter full name..."
            type="text"
            value={state.fname}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Enter email..."
            type="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={state.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
