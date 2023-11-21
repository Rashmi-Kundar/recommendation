import React, { useState } from "react";

import { motion } from "framer-motion";
import "./login.scss";
import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [phone, setPhone] = useState("");
  console.log( password, email);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(email,password);

    try {
      const result = await axios.post("http://localhost:9300/api/v1/login", {
      
        password,
        email,
      
      });
      console.log(result);
      if (result.data.success) {
        alert("user loggedIn successsfully");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    }
  };
  return (
    <div className="app__login-container">
      <motion.div
        whileInView={{ x: [200, 0] }}
        transition={{ ease: "easeIn", duration: 0.75 }}
        className="app__login-subcontainer"
      >
        <div className="left">
          <div className="title-container">
            <h1>Welcome back !</h1>
            <p>You can sign in to access with your existing profile</p>
          </div>
        </div>
        <div className="right">
          <div className="app__right-subContainer">
            <div className="app__sign-title">
              <h1>Sign In</h1>
              <p>
                Please enter your login information or <Link className="click" to="/register"> click here</Link>  to
                register
              </p>
            </div>
            <div className="app__form">
              <form action="" onSubmit={handleSubmit} className="form-container">
                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }}  type="email" placeholder="Enter your email" />
                <input   value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }}  placeholder="Enter your password" type="password" />
                 <div className="btn-container">
              <button  type="submit" className="btn">log In</button>
            </div>
              </form>
            </div>

         

        
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
