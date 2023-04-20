import React, { useContext, useState } from 'react'
import style from '../../Style/adminLogin.module.css'
import DarkMode from '../../DakMode/DarkMode'
import Context from '../../../Context/Context'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import api, { getAccessToken } from '../../../Services/api'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const { modeStyle, setUserData, setLoading } = useContext(Context)
  const [credentials, setCredentials] = useState({ user_id: '', password: '' })
  const navigate = useNavigate()

  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handelSubmit = async (e) => {
    e.preventDefault()

    try {

      setLoading(true)

      const { data } = await api.post("/api/auth/login", credentials);

      localStorage.setItem("access_token", data.access_token)

      const res = await api.get("/api/auth/userdata", {
        headers: {
          access_token: getAccessToken(),
        }
      });

      if (res?.status === 200) {
        setUserData(res?.data)
        navigate("/Admin")
      }

      setLoading(false)

    } catch (error) {

      setLoading(false)
      
      console.log("error", error?.response?.data?.error)

    }
  }

  const handelPassVisibility = () => {
    setShowPass(!showPass)
  }
  const [showPass, setShowPass] = useState(false)

  return (
    <div className={style.loginContainer}
      style={{
        color: `${modeStyle.textColor}`
      }}
    >
      <div className={style.header}>
        <h1>Admin Login</h1>
      </div>

      <div className={style.formContainer}>
        <form onSubmit={handelSubmit}
          className={style.loginForm}
          style={{
            boxShadow: `${modeStyle.mode === "light" ? "0px 0px 10px 5px rgba(35, 83, 105, 0.3)" : "0px 0px 10px 5px rgba(148, 185, 202, 0.3)"}`
          }}
        >
          <div className={style.formData}>
            <label htmlFor="userId">User Id</label>
            <input
              required
              style={{
                boxShadow: `${modeStyle.mode === "light" ? "0px 0px 10px 5px rgba(35, 83, 105, 0.3)" : "0px 0px 10px 5px rgba(148, 185, 202, 0.3)"}`,
                backgroundColor: `${modeStyle.bgColor}`,
                color: `${modeStyle.textColor}`
              }}
              onChange={handelChange}
              value={credentials.user_id}
              type="text"
              name='user_id'
              placeholder='Enter User Id'
            />
          </div>
          <div className={`${style.formData} ${style.passwordContainer}`}>
            <label htmlFor="password">Password</label>
            <input
              required
              style={{
                boxShadow: `${modeStyle.mode === "light" ? "0px 0px 10px 5px rgba(35, 83, 105, 0.3)" : "0px 0px 10px 5px rgba(148, 185, 202, 0.3)"}`,
                backgroundColor: `${modeStyle.bgColor}`,
                color: `${modeStyle.textColor}`
              }}
              onChange={handelChange}
              value={credentials.password}
              name='password'
              type={showPass === false ? "password" : "text"}
              placeholder='Enter Password'
            />
            {showPass === false ? <AiOutlineEye className={style.hideShow} onClick={handelPassVisibility} /> : <AiOutlineEyeInvisible className={style.hideShow} onClick={handelPassVisibility} />}
          </div>
          <div className={style.formData}>
            <button className={style.loginBtn} type='submit'>Login</button>
          </div>
        </form>
      </div>

      <div className={style.footer}>
        <h6>Copyright &copy; NOTELYFE 2022 | All Rights Reserved</h6>
        <DarkMode />
      </div>
    </div>
  )
}

export default AdminLogin
