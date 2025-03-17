import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeamMemberList() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/team_members/')
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Team members</h1>
      <p>You have {members.length} team member{members.length !== 1 ? 's' : ''}.</p>
      <hr />
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {members.map(member => (
          <li
            key={member.id}
            onClick={() => navigate(`/edit/${member.id}`)}
            style={{ margin: '10px 0', borderBottom: '1px solid #ccc', cursor: 'pointer' }}
          >
            <strong>
              {member.name}
              {member.role === 'admin' ? ' (admin)' : ''}
            </strong><br />
            <span>{member.phone}</span><br />
            <span>{member.email}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/add')} style={{ marginTop: 10 }}>+</button>
    </div>
  );
}

export default TeamMemberList;
