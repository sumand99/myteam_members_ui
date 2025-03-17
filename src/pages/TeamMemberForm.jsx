import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeamMemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'regular',
  });

  useEffect(() => {
    if (isEditing) {
      axios.get(`/api/team_members/${id}/`)
        .then(res => setFormData(res.data))
        .catch(err => console.error(err));
    }
  }, [id, isEditing]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const request = isEditing
      ? axios.put(`/api/team_members/${id}/`, formData)
      : axios.post('/api/team_members/', formData);

    request
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  const handleDelete = () => {
    if (!window.confirm('Delete this member?')) return;
    axios.delete(`/api/team_members/${id}/`)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{isEditing ? 'Edit team member' : 'Add a team member'}</h1>
      <p>{isEditing
        ? 'Edit contact info, location and role.'
        : 'Set email, location and role.'}
      </p>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>

      <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10 }}
          required
        />

        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <p>Role</p>
        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="regular"
              checked={formData.role === 'regular'}
              onChange={handleChange}
            />
            &nbsp; Regular – Can’t delete members
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={formData.role === 'admin'}
              onChange={handleChange}
            />
            &nbsp; Admin – Can delete members
          </label>
        </div>

        <div style={{ marginTop: 10 }}>
          {isEditing && (
            <button
              type="button"
              onClick={handleDelete}
              style={{ marginRight: 10, background: 'red', color: '#fff' }}
            >
              Delete
            </button>
          )}
          <button type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TeamMemberForm;
