import React from 'react';

function DoctorCard({ name, speciality, city, experience }) {
  return (
    <div className="doctorCard">
      <h3>{name}</h3>
      <p className="speciality">{speciality}</p>
      <p className="info">City: {city}</p>
      <p className="info">Experience: {experience} years</p>
    </div>
  );
}

export default DoctorCard;
