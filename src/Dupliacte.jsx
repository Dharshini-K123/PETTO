
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function handlemeow() {
  var music = new Audio('click.mp3');
  music.play();
}

export default function Dupliacte() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Check if email is empty
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }

    // Check if the email is valid (you can replace this with your validation logic)
    if (!validateEmail(email)) {
      alert('Invalid email address.');
      return;
    }

    // Check if password is empty
    if (!password.trim()) {
      alert('Please enter your password.');
      return;
    }

    // Your existing code for playing sound on button click
    handlemeow();

    // You can proceed with your login logic here
    // Example: call an authentication function or make an API request
  };

  const validateEmail = (email) => {
    // Basic email validation, you can replace it with a more robust solution
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="login1">
        <div className="Pic">
        <img src='https://media.istockphoto.com/id/1298623258/vector/pets-cats-and-dogs-seamless-pattern-in-doodle-style.jpg?s=612x612&w=0&k=20&c=aBGESJnmydI7uM1Yu8bWCm0Obf0YBG8sahzR3KJgffY=' alt=''></img>
   
        </div>
        <div className="login">
        <img  className="pic1"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yiKsNL7hVr4LCGASGh8LjuUIfm5T6YWsjw&usqp=CAU'alt=''></img> 
        <h1>Adapt Me!</h1>
          <label>Email Address: </label><br /><br />
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email" /><br /><br />
          <label>Password: </label><br /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="email" /><br /><br />
          <input className="button1" type="button" value="Login" onClick={handleSubmit} />
          <p className="p1">Don't have an account?<br /></p>
          <Link to="/Reg"><p>Sign up</p></Link>
        </div>
      </div>
    </>
  );
}
