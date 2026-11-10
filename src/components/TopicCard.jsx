import React from 'react';

function TopicCard({ title, text, author, role, replies }) {
  return (
    <div className="topicCard">
      <h3>{title}</h3>
      <p className="topicText">{text}</p>
      <div className="topicFooter">
        <span className="topicAuthor">{author}</span>
        <span className={role === 'Doctor' ? 'badge doctor' : 'badge patient'}>{role}</span>
        <span className="topicReplies">{replies} replies</span>
      </div>
    </div>
  );
}

export default TopicCard;
