import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>About MediTalk</h2>

      <div className="about-card">
        <h3>Our Purpose</h3>
        <p>
          MediTalk is a web application that connects doctors and patients. Doctors share recent
          studies about common illnesses, and everyone can talk about health topics in
          organized discussion groups.
        </p>
      </div>

      <div className="about-card">
        <h3>Who Can Use It?</h3>
        <p>
          Doctors who want to share knowledge, and patients who want to understand their health
          better and ask questions in a friendly place.
        </p>
      </div>

      <div className="about-card">
        <h3>Benefits</h3>
        <ul>
          <li>Free to use</li>
          <li>Works on desktop and mobile</li>
          <li>Studies written in simple words</li>
          <li>Six discussion groups for different health topics</li>
        </ul>
      </div>

      <div className="about-card note">
        <h3>Important Note</h3>
        <p>
          The studies, doctors and discussions shown on this website are sample content created
          for a student project. They are not real medical advice. Always talk to a real doctor
          about your health.
        </p>
      </div>
    </div>
  );
};

export default About;
