import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamMemberList from './pages/TeamMemberList';
import TeamMemberForm from './pages/TeamMemberForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamMemberList />} />
        <Route path="/add" element={<TeamMemberForm />} />
        <Route path="/edit/:id" element={<TeamMemberForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
