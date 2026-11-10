import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import RoleBar from './components/RoleBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Studies from './pages/Studies';
import Discussions from './pages/Discussions';
import About from './pages/About';
import Register from './pages/Register';
import Contact from './pages/Contact';
import { StudiesList } from './data/StudiesList';
import { TopicsList } from './data/TopicsList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // these states live in App so they are kept when the user changes page
  const [role, setRole] = useState('Patient');
  const [studies, setStudies] = useState(StudiesList);
  const [topics, setTopics] = useState(TopicsList);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <RoleBar role={role} setRole={setRole} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/doctors" element={<Doctors />} />
          <Route
            path="/studies"
            element={<Studies role={role} studies={studies} setStudies={setStudies} />}
          />
          <Route
            path="/discussions"
            element={<Discussions role={role} topics={topics} setTopics={setTopics} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
