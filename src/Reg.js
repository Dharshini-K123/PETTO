import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Reg() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError('');
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (!/^\d+$/.test(value)) {
      setMobileError('Mobile number should contain only numbers');
    } else {
      setMobileError('');
    }
    setMobileNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (!/^\d+$/.test(mobileNumber)) {
      setMobileError('Mobile number should contain only numbers');
      return;
    }

    const userData = {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
      city,
      country,
      mobileNumber,
    };

    try {
      console.log(userData);
      const response = await axios.post(
        'http://localhost:9000/register',
        userData
      );

      // Assuming successful registration, navigate to the desired page
      navigate('/Firstpage');

      // Clear form fields and errors after successful submission
      setFirstName('');
      setLastName('');
      setEmailAddress('');
      setPassword('');
      setConfirmPassword('');
      setCity('');
      setCountry('');
      setMobileNumber('');
      setPasswordError('');
      setMobileError('');
    } catch (error) {
      console.error('Error registering user:', error);
      // Optionally, handle error response here and display appropriate error message to the user
    }
  };

  return (
    <div className="wrapper">
      <div className="registration_form">
        <div className="title">Registration Form</div>
        <form onSubmit={handleSubmit}>
          <div className="form_wrap">
          <div className="input_grp">
          <div className="input_wrap">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input_wrap">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="input_wrap">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="input_wrap">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input_wrap">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordError && (
            <p style={{ color: 'red' }}>{passwordError}</p>
          )}
        </div>
        <div className="input_wrap">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            value={mobileNumber}
            onChange={handleMobileChange}
          />
          {mobileError && (
            <p style={{ color: 'red' }}>{mobileError}</p>
          )}
        </div>
        <div className="input_wrap">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input_wrap">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input_wrap">
          <input
            type="submit"
            value="Register Now"
            className="submit_btn"
          />
        </div>

          </div>
        </form>
      </div>
    </div>
  );
}
