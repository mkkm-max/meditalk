import React, { useState } from 'react';
import '../styles/Forms.css';
import '../styles/Register.css';

const Register = () => {
  const [state, setState] = useState({ fname: '', email: '', password: '', role: 'Patient' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    setResult({ name: state.fname, role: state.role });
    setState({ fname: '', email: '', password: '', role: 'Patient' });
  };

  return (
    <div className="register-page">
      <h1>Join MediTalk</h1>
      <p className="subtitle">Create your free account as a doctor or a patient.</p>

      {result !== null && (
        <div className="success-box">
          <strong>Welcome, {result.name}!</strong>
          Your {result.role.toLowerCase()} account was created successfully.
        </div>
      )}

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="fname"
              type="text"
              placeholder="Enter full name"
              value={state.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="At least 6 characters"
              value={state.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>I am a...</label>
            <select name="role" value={state.role} onChange={handleChange}>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
          <button type="submit" className="btn register-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
