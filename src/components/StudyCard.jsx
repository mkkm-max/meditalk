import React from 'react';

function StudyCard({ title, category, author, date, summary }) {
  return (
    <div className="studyCard">
      <span className="studyCategory">{category}</span>
      <h3>{title}</h3>
      <p className="studySummary">{summary}</p>
      <p className="studyMeta">
        {author} · {date}
      </p>
    </div>
  );
}

export default StudyCard;
