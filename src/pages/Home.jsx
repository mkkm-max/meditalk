import React from 'react';
import { Link } from 'react-router-dom';
import { CategoriesList } from '../data/CategoriesList';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to MediTalk</h1>
          <p>
            A place where doctors and patients can read simple studies,
            join discussion groups and ask health questions.
          </p>
          <Link to="/register" className="hero-btn">Get Started</Link>
          <Link to="/studies" className="hero-btn-outline">Read Studies</Link>
        </div>
      </div>

      <div className="home-section">
        <h2>How it works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <h3>Step 1: Create an account</h3>
            <p>Join as a doctor or as a patient. It is free and quick.</p>
          </div>
          <div className="step-card">
            <h3>Step 2: Read the studies</h3>
            <p>Doctors share recent studies, sorted by illness category.</p>
          </div>
          <div className="step-card">
            <h3>Step 3: Join the discussion</h3>
            <p>Pick a group, post a topic and talk with the community.</p>
          </div>
        </div>
      </div>

      <div className="home-section">
        <h2>Our discussion groups</h2>
        <div className="groups-grid">
          {CategoriesList.map((group) => {
            return (
              <Link to="/discussions" className="group-mini" key={group.id}>
                {group.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="cta">
        <h2>Ready to join MediTalk?</h2>
        <p>Create your free account and start talking health today.</p>
        <Link to="/register" className="btn">Register Now</Link>
      </div>
    </div>
  );
};

export default Home;
