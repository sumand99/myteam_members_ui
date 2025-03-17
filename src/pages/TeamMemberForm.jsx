import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeamMemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'regular',
  });

  useEffect(() => {
    if (isEditing) {
      axios.get(`/api/team_members/${id}/`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error(err));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = isEditing
      ? axios.put(`/api/team_members/${id}/`, formData)
      : axios.post('/api/team_members/', formData);

    request
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    if (window.confirm('Delete this member?')) {
      axios.delete(`/api/team_members/${id}/`)
        .then(() => navigate('/'))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container">
      <h1 className="form-title">
        {isEditing ? 'Edit team member' : 'Add a team member'}
      </h1>
      <p className="form-subtitle">
        {isEditing
          ? 'Edit contact info, location and role.'
          : 'Set email, location and role.'}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="role-group">
          <label className="radio-option">
            <input
              type="radio"
              name="role"
              value="regular"
              checked={formData.role === 'regular'}
              onChange={handleChange}
            />
            {' '}Regular – Can’t delete members
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={formData.role === 'admin'}
              onChange={handleChange}
            />
            {' '}Admin – Can delete members
          </label>
        </div>

        <div className="button-row">
          {isEditing && (
            <button
              type="button"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TeamMemberForm;