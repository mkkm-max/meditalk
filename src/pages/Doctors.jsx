import React, { useState } from 'react';
import { DoctorsList } from '../data/DoctorsList';
import DoctorCard from '../components/DoctorCard';
import '../styles/Cards.css';
import '../styles/Doctors.css';

const Doctors = () => {
  const [search, setSearch] = useState('');

  // keep only the doctors whose name or speciality contains the search text
  const filteredDoctors = DoctorsList.filter((doctor) => {
    const text = (doctor.name + ' ' + doctor.speciality).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div className="page">
      <h1>Find a Doctor</h1>
      <p className="subtitle">Search by name or speciality.</p>

      <input
        className="searchInput"
        type="text"
        placeholder="Search doctors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cardsGrid">
        {filteredDoctors.map((doctor) => {
          return (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              speciality={doctor.speciality}
              city={doctor.city}
              experience={doctor.experience}
            />
          );
        })}
      </div>

      {filteredDoctors.length === 0 && (
        <p className="noResults">No doctors found. Try another word.</p>
      )}
    </div>
  );
};

export default Doctors;
