import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ title, text, link, forWho }) {
  return (
    <Link to={link} className="featureCard">
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="featureFor">For: {forWho}</span>
      <div className="featureLink">Open →</div>
    </Link>
  );
}

export default FeatureCard;
