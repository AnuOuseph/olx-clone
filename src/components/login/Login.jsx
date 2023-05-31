/* eslint-disable no-unused-vars */
import React from 'react'
import OlxLogo from '../../assets/OlxLogo'
import './Login.css'

function Login() {
  return (
    <div className='main-div'>
        <div className='content-div'>
            <div className='border-form'>
                <div className='logo'>
                    <OlxLogo/>
                </div>
                <div className='heading'>
                    <h4>Enter your email to login.</h4>
                </div>
                <div >
                    <input className='email' type="email" placeholder='Email..' id='email' name='email' />
                </div>
                <div >
                    <input className='email' type="password" placeholder='Password..' id='password' name='password' />
                </div>
                <div>
                    <button className='btn'>Login</button>
                </div>
                <div className='last-text'>
                    <p>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
                    <a href="">Signup</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
