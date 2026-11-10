import React from 'react';
import '../styles/RoleBar.css';

// small bar under the navbar to switch between Patient and Doctor view
function RoleBar({ role, setRole }) {
  return (
    <div className="roleBar">
      <label htmlFor="role">Viewing as: </label>
      <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Patient">Patient</option>
        <option value="Doctor">Doctor</option>
      </select>
    </div>
  );
}

export default RoleBar;
