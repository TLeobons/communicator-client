import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/LoginForm.css'

const LoginForm = () => {

  const [ username, setUsername ] = useState('')
  const [ room, setRoom ] = useState('')

  return (
    <div className="container">

      <form className='login-form'>

        <div className="form-group">
          <label htmlFor="username"> Who are you? </label>
          <input type="text" className='input-field' name="username" id="username"
            value={username} onChange={e => setUsername(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="room"> Which room do you want to go? </label>
          <input type="text" className='input-field' name='room' id='room'
            value={room} onChange={e => setRoom(e.target.value)} required />
        </div>

        <Link to={`/chat?username=${username}&room=${room}`}>
          <button type="submit" className='btn'> CHAT! </button>
        </Link>

      </form>

    </div>
  )
}

export default LoginForm