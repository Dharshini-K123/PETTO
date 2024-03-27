import React, {useState } from 'react';
import axios from 'axios';
import './Lastpage.css';
import { useNavigate } from 'react-router-dom';
export default function Lastpage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    source: '',
    name: '',
    email: '',
    petName: '',
    address: '',
    phone: '',
    age: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/saveuser1', formData);

      if (response.status === 201) {
        // Handle success, e.g., show a success message or redirect
        console.log('Form submitted successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    navigate('/Thank');
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 id="title">Pet adoption form</h1>
          <p id="note">
            Every family and every pets have different needs. This form will help us to identify what information will be
            helpful for you and for us to find the best pets for you.
          </p>
        </header>
        <form id="adoption-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label id="label-one" htmlFor="source" className="label-item">
              How did you hear about "Petto"?
            </label>
            <input
              type="text"
              name="source"
              className="form-control"
              value={formData.source}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="name" id="label-two" className="label-item">
              Full name<span className="required">*</span>:
            </label>
            <input
              type="text"
              required
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="email" id="label-three" className="label-item">
              E-mail<span className="required">*</span>:
            </label>
            <input
              type="email"
              required
              name="email"
              className="form-control"
              placeholder="Enter your e-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="petName" id="label-two" className="label-item">
              Name of the pet you wish to adopt?<span className="required">*</span>
            </label>
            <input
              type="text"
              required
              name="petName"
              className="form-control"
              placeholder="Enter pet name"
              value={formData.petName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <p className="label-item">
              Address* <span className="clue">(city, zipcode, street, bld., apt.)</span>
            </p>
            <textarea
              id="address"
              required
              name="address"
              className="input-textarea"
              placeholder="Enter your address here"
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-item">
            <label htmlFor="phone" id="label-five" className="label-item">
              Mobile phone:
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-control"
              pattern="[0-9]{10}"
              placeholder="Format: Enter Your Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="age" id="laberl-six" className="label-item">
              Age:
            </label>
            <input
              type="text"
              name="age"
              className="form-control"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <p className="label-item">Why do you Adopt the pet?*</p>
            <textarea
              id="address"
              required
              name="reason"
              className="input-textarea"
              placeholder="Reason"
              value={formData.reason}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div id="submit-explain">
            <p>
              By sending this electronically, I acknowledge that I have completely read this questionnaire and
              comprehend it fully.
            </p>
          </div>

          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
