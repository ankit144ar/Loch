import React, { useState } from "react";
import '../style/Banner.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Banner() {
  const [email,setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      toast.error("Please enter a valid email");
      setEmail('');
    }
    else{
      window.location.href = "https://app.loch.one/welcome";
    }
  }
  return (
    <div className="banner row-b">
      <div className="banner-container">
        <div className="bannerOuter">
          <h3 className="banner-heading">Sign up for exclusive access.</h3>
          <form className="banner-form" onSubmit={handleSubmit}>
            <input
             type="email" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Your email address" />
            <button type="submit">Get started</button>
          </form>
        </div>
        <p className="banner-text">
          You’ll receive an email with an invite link to join.
        </p>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Banner;
