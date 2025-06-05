import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './RegisterPage.css'; 

function RegisterPage() {
   
  const { setUser } = useUser(); 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'Yes',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setUser(form);     
    navigate('/account'); 
  };
  return (
    <div className="register-card">
      <h2>
        Create your <br />
        PopX account
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="form-group">
            <label>Full Name<span className="required">*</span></label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone number<span className="required">*</span></label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Email address<span className="required">*</span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Password<span className="required">*</span></label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Company name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Marry Doe"
            />
          </div>

          <div className="form-group radio-group">
            <label>Are you an Agency?<span className="required">*</span></label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={form.agency === 'Yes'}
                  onChange={handleChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={form.agency === 'No'}
                  onChange={handleChange}
                />{' '}
                No
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="register-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
