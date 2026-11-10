import React, { useState } from 'react';
import { CategoriesList } from '../data/CategoriesList';
import StudyCard from '../components/StudyCard';
import '../styles/Cards.css';
import '../styles/Forms.css';
import '../styles/Studies.css';

const Studies = ({ role, studies, setStudies }) => {
  const [selected, setSelected] = useState('All');
  const [state, setState] = useState({
    title: '',
    category: CategoriesList[0].name,
    summary: '',
  });
  const [posted, setPosted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudy = {
      id: studies.length + 1,
      title: state.title,
      category: state.category,
      author: 'Dr. You',
      date: 'Today',
      summary: state.summary,
    };
    setStudies([newStudy, ...studies]);
    setState({ title: '', category: CategoriesList[0].name, summary: '' });
    setPosted(true);
  };

  // show every study, or only the ones of the selected tab
  const shownStudies = studies.filter((study) => {
    return selected === 'All' || study.category === selected;
  });

  return (
    <div className="page">
      <h1>Latest Studies</h1>
      <p className="subtitle">Short studies shared by our doctors, sorted by category.</p>

      <div className="tabs">
        <button
          className={selected === 'All' ? 'tab active' : 'tab'}
          onClick={() => setSelected('All')}
        >
          All
        </button>
        {CategoriesList.map((category) => {
          return (
            <button
              key={category.id}
              className={selected === category.name ? 'tab active' : 'tab'}
              onClick={() => setSelected(category.name)}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {role === 'Doctor' ? (
        <div className="form-card">
          <h2>Post a new study</h2>
          {posted && (
            <div className="success-box">
              <strong>Study posted!</strong>
              It now appears at the top of the list.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="Study title"
                value={state.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={state.category} onChange={handleChange}>
                {CategoriesList.map((category) => {
                  return (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Summary</label>
              <textarea
                name="summary"
                rows="4"
                placeholder="Write a short summary..."
                value={state.summary}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Post Study</button>
          </form>
        </div>
      ) : (
        <p className="roleNote">
          Only doctors can post studies. Change "Viewing as" at the top to Doctor to try it.
        </p>
      )}

      <div className="cardsGrid">
        {shownStudies.map((study) => {
          return (
            <StudyCard
              key={study.id}
              title={study.title}
              category={study.category}
              author={study.author}
              date={study.date}
              summary={study.summary}
            />
          );
        })}
      </div>

      {shownStudies.length === 0 && (
        <p className="roleNote">No studies in this category yet.</p>
      )}
    </div>
  );
};

export default Studies;
