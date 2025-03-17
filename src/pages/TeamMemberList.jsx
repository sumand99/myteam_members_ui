import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeamMemberList() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/team_members/')
      .then((res) => setMembers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1 className="title">Team members</h1>
          <p className="subtitle">
            You have {members.length} team member{members.length !== 1 ? 's' : ''}.
          </p>
        </div>
        <button className="add-button" onClick={() => navigate('/add')}>
          +
        </button>
      </div>

      <ul className="member-list">
        {members.map((member) => (
          <li
            key={member.id}
            className="member-card"
            onClick={() => navigate(`/edit/${member.id}`)}
          >
            <div className="member-name">
              {member.name}
              {member.role === 'admin' && ' (admin)'}
            </div>
            <div className="member-info">{member.phone}</div>
            <div className="member-info">{member.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMemberList;