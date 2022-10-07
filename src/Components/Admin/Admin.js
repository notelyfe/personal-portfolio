import React, { useContext } from 'react'
import "./AdminStyle.css";
import AdminNav from './AdminNav';
// import Quotes from './Quotes/Quotes'
import { useState } from 'react';
import Context from '../context/Context';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Admin = () => {

  const context = useContext(Context)
  const { authDetail, modeStyle } = context

  const login = (e) => {
    e.preventDefault();
    authDetail.map((detail) => {
      if ((detail.userId === id) && (detail.pass === pass)) {
        setSuccess(true)
      }
      else {
        setPrompt(true)
        setTimeout(() => {
          setPrompt(false)
        }, 1000);
      }
    })
  }

  const [prompt, setPrompt] = useState(false)

  const [success, setSuccess] = useState(false)

  const authId = (event) => {
    setId(event.target.value)
  }

  const authPass = (event) => {
    setPass(event.target.value)
  }

  const [id, setId] = useState('')
  const [pass, setPass] = useState('')

  const showpass = (e) => {
    e.preventDefault()
    setShow(true)
  }
  const hidepass = (e) => {
    e.preventDefault()
    setShow(false)
  }

  const [show, setShow] = useState(false)

  return (
    <>
      {(success===false)?<div className="container admin-container" >
        <h1 className='my-1 text-center velvet'>Admin LogIn</h1>
        <hr />
        <form >
          <small className={`text-danger d-${prompt===true?'block':'none'}`}>Invalid Credentials</small>
          <div className="mb-3">
            <label htmlFor="id" className={`form-label admin-label-id text-${modeStyle.textColor}`}>User Id</label>
            <input
              type="text"
              className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
              id="id"
              value={id}
              onChange={authId} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className={`form-label admin-label text-${modeStyle.textColor}`}>Password</label>
            <input
              type={show===true?'text':'password'}
              className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
              id="pass"
              value={pass}
              onChange={authPass} />
              {(show===true)?<AiOutlineEyeInvisible onClick={hidepass} className='hide-show' />:<AiOutlineEye onClick={showpass} className='hide-show' />}
                     
          </div>
          <button
            className="btn btn-primary my-1 admin-btn"
            onClick={login}>Log In</button>
        </form>
      </div>:''
      // <Quotes />
      }
    </>
  )
}

export default Admin