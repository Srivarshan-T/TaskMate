import React, { useEffect,   useRef } from 'react';
import {useNavigate } from "react-router-dom";

const Start = () => {
  useEffect(()=>{
    let username=window.localStorage.getItem('USERNAME3');
    if (JSON.parse(username)){
      const enteredName = JSON.parse(username);
      navigate("/todo", { state: { user: enteredName } });
    }
    
  },[])
  const name = useRef();
  const navigate = useNavigate(); 

  function getstarted() {
      const enteredName = name.current.value.trim();
      window.localStorage.setItem('USERNAME3',JSON.stringify(enteredName));
      if (enteredName !== "") {
        navigate("/todo", { state: { user: enteredName } });
      }
    
  
  }

  return (
    <div className='start_container'>
      <div className='title'>
        <img src='icon.svg' className='iconimage' />
        <h1>TaskMate</h1>
      </div>
      <div className='con'>
        <div className='start-page-container'>
          <p className='start-page-msg'>Enter Your Name To Get Started.</p>
          <input
            type="text"
            placeholder='Enter your name'
            className='start-page-input'
            ref={name}
          />
          <button className='start-page-btn' onClick={getstarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Start;
