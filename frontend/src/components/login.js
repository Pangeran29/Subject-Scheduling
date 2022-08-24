import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [msg, setmsg] = useState("")

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      })
      navigate("/dashboard")
    } catch (error) {
      if (error.response) {
        setmsg(error.response.data.msg)
      }
    }
  }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Auth} className='box'>
                <p className='title is-5 has-text-centered'>- Login Page -</p>
                <p className='has-text-centered'>{ msg }</p>
                <div className="field mt-5">
                  <label className='label'>Username</label>
                  <div className="controls">
                    <input type="text" className='input' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className='label'>Password</label>
                  <div className="controls">
                    <input type="password" className='input' placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className='button is-success is-fullwidth'>Login</button>
                </div>
              </form>
              <p className='has-text-centered'>
              Do not have account? Register 
              <a href="/register"> here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

//export default login