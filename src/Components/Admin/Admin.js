import React, { useContext } from 'react'
import "./AdminStyle.css";
import { useState } from 'react';
import Context from '../context/Context';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const context = useContext(Context)
  const { modeStyle, checkValidation } = context
  let navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()

    const host = "http://localhost:5000";

    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id, password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('myToken', json.authtoken)
      checkValidation(json.authtoken)
      navigate('/user')
    }
    else {
      setPrompt(true)
      setTimeout(() => {
        setPrompt(false)
      }, 1000);
    }
  }
  const [prompt, setPrompt] = useState(false)

  const authId = (event) => {
    setUser_Id(event.target.value)
  }

  const authPass = (event) => {
    setPassword(event.target.value)
  }

  const [user_id, setUser_Id] = useState('')
  const [password, setPassword] = useState('')

  const handelPassVisibility = (e) => {
    e.preventDefault()

    {(show === true) ? setShow(false) : setShow(true)}
  }
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="container admin-container" >
        <h1 className='my-1 text-center velvet'>Admin LogIn</h1>
        <hr />
        <form >
          <small className={`text-danger d-${prompt === true ? 'block' : 'none'}`}>Invalid Credentials</small>
          <div className="mb-3">
            <label htmlFor="id" className={`form-label admin-label-id text-${modeStyle.textColor}`}>User Id</label>
            <input
              type="text"
              className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
              id="id"
              value={user_id}
              onChange={authId} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className={`form-label admin-label text-${modeStyle.textColor}`}>Password</label>
            <input
              type={show === true ? 'text' : 'password'}
              className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
              id="pass"
              value={password}
              onChange={authPass} />
            {(show === true) ? <AiOutlineEyeInvisible onClick={handelPassVisibility} className='hide-show' /> : <AiOutlineEye onClick={handelPassVisibility} className='hide-show' />}

          </div>
          <button
            className="btn btn-primary my-1 admin-btn"
            onClick={login}>Log In</button>
        </form>
      </div>
    </>
  )
}

export default Admin