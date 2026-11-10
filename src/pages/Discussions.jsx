import React, { useState } from 'react';
import { CategoriesList } from '../data/CategoriesList';
import TopicCard from '../components/TopicCard';
import '../styles/Cards.css';
import '../styles/Forms.css';
import '../styles/Discussions.css';

const Discussions = ({ role, topics, setTopics }) => {
  // null = show the list of groups, otherwise the id of the opened group
  const [groupId, setGroupId] = useState(null);
  const [state, setState] = useState({ title: '', text: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTopic = {
      id: topics.length + 1,
      groupId: groupId,
      title: state.title,
      text: state.text,
      author: 'You',
      role: role,
      replies: 0,
    };
    setTopics([newTopic, ...topics]);
    setState({ title: '', text: '' });
  };

  // ---------- one group opened ----------
  if (groupId !== null) {
    const group = CategoriesList.find((item) => item.id === groupId);
    const groupTopics = topics.filter((topic) => topic.groupId === groupId);

    return (
      <div className="page">
        <button className="backBtn" onClick={() => setGroupId(null)}>
          ← Back to groups
        </button>
        <h1>{group.name}</h1>
        <p className="subtitle">{group.description}</p>

        <div className="form-card">
          <h2>Start a new topic</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="What do you want to talk about?"
                value={state.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="text"
                rows="3"
                placeholder="Write your message..."
                value={state.text}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <p className="postingAs">Posting as: {role}</p>
            <button type="submit" className="btn">Post Topic</button>
          </form>
        </div>

        {groupTopics.map((topic) => {
          return (
            <TopicCard
              key={topic.id}
              title={topic.title}
              text={topic.text}
              author={topic.author}
              role={topic.role}
              replies={topic.replies}
            />
          );
        })}

        {groupTopics.length === 0 && <p className="subtitle">No topics yet. Be the first!</p>}
      </div>
    );
  }

  // ---------- list of the 6 groups ----------
  return (
    <div className="page">
      <h1>Discussion Groups</h1>
      <p className="subtitle">Choose a group to read topics or start a new one.</p>

      <div className="cardsGrid">
        {CategoriesList.map((group) => {
          const count = topics.filter((topic) => topic.groupId === group.id).length;
          return (
            <div className="groupCard" key={group.id} onClick={() => setGroupId(group.id)}>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <span className="groupCount">{count} topics</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discussions;
